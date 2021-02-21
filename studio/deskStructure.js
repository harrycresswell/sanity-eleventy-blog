import S from '@sanity/desk-tool/structure-builder'
import {MdSettings, MdPerson, MdLocalOffer, MdFlightLand, MdHome, MdPalette, MdDescription} from 'react-icons/md'

const hiddenDocTypes = listItem =>
  !['category', 'author', 'post', 'siteSettings', 'home', 'landing', 'project'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.listItem()
        .title('Homepage')
        .icon(MdHome)
        .child(
          S.editor()
            .id('home')
            .schemaType('home')
            .documentId('home')
        ),
      S.listItem()
        .title('Blog posts')
        .icon(MdDescription)
        .schemaType('post')
        .child(S.documentTypeList('post').title('Blog posts')),
      S.listItem()
        .title('Authors')
        .icon(MdPerson)
        .schemaType('author')
        .child(S.documentTypeList('author').title('Authors')),
      S.listItem()
        .title('Categories')
        .icon(MdLocalOffer)
        .schemaType('category')
        .child(S.documentTypeList('category').title('Categories')),
      S.listItem()
        .title('Landing pages')
        .icon(MdFlightLand)
        .schemaType('landing')
        .child(S.documentTypeList('landing').title('Landing pages')),
      S.listItem()
        .title('Projects')
        .icon(MdPalette)
        .schemaType('project')
        .child(S.documentTypeList('project').title('Projects')),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
