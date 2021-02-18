const groq = require('groq')
const BlocksToMarkdown = require('@sanity/block-content-to-markdown')
const client = require('../utils/sanityClient.js')
const serializers = require('../utils/serializers')
const overlayDrafts = require('../utils/overlayDrafts')

const hasToken = !!client.config().token

function generateAuthor (author) {
  return {
    ...author,
    bio: BlocksToMarkdown(author.bio, { serializers, ...client.config() })
  }
}

async function getAuthors () {
  const filter = groq`*[_type == "author"]`
  // https://www.sanity.io/docs/how-queries-work#our-first-join-52023b22ca05
  const projection = groq`{
    // grab author data
    _id, 
    name, 
    bio, 
    image,
    socialLinks,
    // grab posts that reference author
   "posts": *[_type == "post" && references(^._id)]{
      title, 
      slug, 
      mainImage, 
      publishedAt, 
      excerpt,
      "categories": categories[]{
        "title": ^->title,
        "slug": ^->slug.current
      }
    },
   "projects": *[_type == "project" && references(^._id)]{
      title, 
      slug, 
      mainImage,
      publishedAt, 
      excerpt
    }
  }`
  const query = [filter, projection].join(' ')
  const docs = await client.fetch(query).catch(err => console.error(err))
  const authors = docs.map(generateAuthor)
  const reducedAuthors = overlayDrafts(hasToken, authors)
  return reducedAuthors
}

module.exports = getAuthors
