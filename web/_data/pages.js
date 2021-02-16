const BlocksToMarkdown = require('@sanity/block-content-to-markdown')
const groq = require('groq')
const client = require('../utils/sanityClient.js')
const serializers = require('../utils/serializers')
const overlayDrafts = require('../utils/overlayDrafts')
const hasToken = !!client.config().token

function generatePage (page) {
  return {
    ...page,
    body: BlocksToMarkdown(page.body, { serializers, ...client.config() })
  }
}

async function getPages () {
  // Learn more: https://www.sanity.io/docs/data-store/how-queries-work
  const filter = groq`*[_type == "page" && defined(slug) && publishedAt < now()]`
  const projection = groq`{
    _id,
    _type,
    publishedAt,
    title,
    slug,
    // expand sections array
    sections[]{
      // return everything
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
        }
      }
    }
  }`
  const order = `| order(publishedAt asc)`
  const query = [filter, projection, order].join(' ')
  const docs = await client.fetch(query).catch(err => console.error(err))
  const reducedDocs = overlayDrafts(hasToken, docs)
  const preparePages = reducedDocs.map(generatePage)
  return preparePages
}

module.exports = getPages
