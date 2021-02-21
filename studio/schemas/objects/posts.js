export default {
  name: 'posts',
  type: 'object',
  title: 'Posts',
  fields: [
    {
      name: 'postsCat',
      title: 'Post Category',
      description: 'Select a category of posts to display',
      type: 'reference',
      to: [{type: 'category'}]
    }
  ],
  preview: {
    select: {
      title: '_type',
      media: 'image' // use the image field as thumbnail
    }
  }
}
