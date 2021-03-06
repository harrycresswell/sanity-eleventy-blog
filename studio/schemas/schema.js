// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document schemas
import home from './documents/home'
import author from './documents/author'
import category from './documents/category'
import post from './documents/post'
import landing from './documents/landing'
import project from './documents/project'
import siteSettings from './documents/siteSettings'

// Object types
import bodyPortableText from './objects/bodyPortableText'
import bioPortableText from './objects/bioPortableText'
import excerptPortableText from './objects/excerptPortableText'
import mainImage from './objects/mainImage'
import authorReference from './objects/authorReference'
import video from './objects/video'
import socialLinks from './objects/socialLinks'
import teamGrid from './objects/teamGrid'
import link from './objects/link'
import navItem from './objects/navItem'
import pageBuilderBodyText from './objects/pageBuilderBodyText'
import quote from './objects/quote'
import posts from './objects/posts'
import gallery from './objects/gallery'
import projectSlider from './objects/projectSlider'
import postGrid from './objects/postGrid'
import textCarousel from './objects/textCarousel'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'blog',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    home,
    siteSettings,
    post,
    landing,
    project,
    category,
    author,
    mainImage,
    authorReference,
    bodyPortableText,
    bioPortableText,
    excerptPortableText,
    video,
    socialLinks,
    teamGrid,
    link,
    navItem,
    pageBuilderBodyText,
    quote,
    posts,
    gallery,
    projectSlider,
    postGrid,
    textCarousel

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ])
})
