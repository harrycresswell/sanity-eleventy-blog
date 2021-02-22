const groq = require('groq')
const client = require('../utils/sanityClient')
module.exports =  async function() {
  return await client.fetch(groq`
    *[_id == "home"]{
      ...,
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
          "mainImage": ^->mainImage.asset->,
          "catTitle": ^->categories[]->title
        },
        // expand projects array for projectSlider component
        projects[]{
          "publishedAt": ^->publishedAt,
          "title": ^->title,
          "slug": ^->slug,
          "excerpt": ^->excerpt,
          "mainImage": ^->mainImage.asset->
        }
      }
    }[0]
  `)
}
