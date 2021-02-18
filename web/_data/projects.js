const BlocksToMarkdown = require('@sanity/block-content-to-markdown')
const groq = require('groq')
const client = require('../utils/sanityClient.js')
const serializers = require('../utils/serializers')
const overlayDrafts = require('../utils/overlayDrafts')
const hasToken = !!client.config().token


function generateProject (project) {
  
  return {
    ...project,
     // Pass excerpt to blocksToMarkdown to turn JSON to markdown
    excerpt: BlocksToMarkdown(project.excerpt, { serializers, ...client.config() }),
    // Pass summary to blocksToMarkdown to turn JSON to markdown
    summary: BlocksToMarkdown(project.summary, { serializers, ...client.config() }),
    // Pass body (e.g 2nd array in project sections) to blocksToMarkdown 
    body: BlocksToMarkdown(project.sections[1], { serializers, ...client.config() })
  }
}

async function getProjects () {
  // Learn more: https://www.sanity.io/docs/data-store/how-queries-work
  const filter = groq`*[_type == "project" && defined(slug) && publishedAt < now()]`
  const projection = groq`{
    _id,
    publishedAt,
    title,
    subtitle,
    summary,
    slug,
    excerpt,
    mainImage,
    projectLink,
    "authors": authors[].author->,
    // expand sections array
    sections[]{
      // explicitly return all attributes
      ...,
      // expand teamMembers array
      teamMembers[]{
        "name": ^->name,
        "slug": ^->slug,
        "image": ^->image
      },
      body[]{
        ...,
        children[]{
          ...,
          // Join inline reference
          _type == "authorReference" => {
            // check /studio/documents/authors.js for more fields
            "name": @.author->name,
            "slug": @.author->slug
          }
        }
      }
    }
  }`
  const order = `| order(publishedAt asc)`
  const query = [filter, projection, order].join(' ')
  const docs = await client.fetch(query).catch(err => console.error(err))
  const reducedDocs = overlayDrafts(hasToken, docs)
  const prepareProjects = reducedDocs.map(generateProject)
  return prepareProjects
}

module.exports = getProjects
