//const BlocksToMarkdown = require('@sanity/block-content-to-markdown')
const groq = require('groq')
const client = require('../utils/sanityClient.js')
//const serializers = require('../utils/serializers')
const overlayDrafts = require('../utils/overlayDrafts')
const hasToken = !!client.config().token

function generateLanding (landing) {
  return {
    ...landing,
  }
}

async function getLandings () {
  // Learn more: https://www.sanity.io/docs/data-store/how-queries-work
  const filter = groq`*[_type == "landing" && defined(slug) && publishedAt < now()]`
  const projection = groq`{
    _id,
    _type,
    publishedAt,
    title,
    slug,
    // expand sections array
    sections[]{
      // explicitly return all attributes
      ...,
      // expand teamMembers array for teamGrid component
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
      },
      // expand images array for gallery component
      images[]{
        ...,
        asset->
      },
      // expand posts array for postGrid component
      posts[]{
        "publishedAt": ^->publishedAt,
        "title": ^->title,
        "slug": ^->slug,
        "excerpt": ^->excerpt,
        "mainImage": ^->mainImage.asset->
      }
    }
  }`
  const order = `| order(publishedAt asc)`
  const query = [filter, projection, order].join(' ')
  const docs = await client.fetch(query).catch(err => console.error(err))
  const reducedDocs = overlayDrafts(hasToken, docs)
  const prepareLandings = reducedDocs.map(generateLanding)
  return prepareLandings
}

module.exports = getLandings
