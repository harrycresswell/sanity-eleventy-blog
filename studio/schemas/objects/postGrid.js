import {MdLibraryBooks} from 'react-icons/md'

export default {
  name: 'postGrid',
  type: 'object',
  title: 'Post grid',
  icon: MdLibraryBooks,
  fields: [
    {
      name: 'posts',
      title: 'Blog Posts',
      description: 'Select Blog Posts',
      type: 'array',
      of: [{type: 'reference', to: {type: 'post'}}]
    }
  ],
  preview: {
    select: {
      title: '_type',
      media: 'image' // use the image field as thumbnail
    }
  }
}
