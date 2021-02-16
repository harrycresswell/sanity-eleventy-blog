const groq = require('groq')
const client = require('../utils/sanityClient.js')
const overlayDrafts = require('../utils/overlayDrafts')

const hasToken = !!client.config().token

function generateCategory(category) {
  return {
    ...category,
  }
}

async function getCategories () {
  const filter = groq`*[_type == "category"]`
  // https://www.sanity.io/docs/how-queries-work#our-first-join-52023b22ca05
  const projection = groq`{
    // grab category data
    ...,
    // grab posts that reference author
   "posts": *[_type == "post" && references(^._id)]{title, slug, mainImage}
  }`
  const query = [filter, projection].join(' ')
  const docs = await client.fetch(query).catch(err => console.error(err))
  const categories = docs.map(generateCategory)
  const reducedCategories = overlayDrafts(hasToken, categories)
  return reducedCategories
}

module.exports = getCategories
