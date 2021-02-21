export default {
  name: 'gallery',
  type: 'object',
  title: 'Gallery',
  fields: [
    {
      name: 'images',
      title: 'Images',
      description: 'Select images',
      type: 'array',
      of: [{type: 'mainImage'}]
    },
    {
      name: 'style',
      title: 'Gallery style',
      description: 'Choose a layout style for gallery images',
      type: 'string',
      validation: Rule => Rule.required(),
      options: {
        layout: 'radio',
        list: [
          {title: 'Carousel', value: 'carousel'},
          {title: 'Horizontal Slider', value: 'hSlider'},
          {title: 'Grid', value: 'grid'}
        ]
      }
    }
  ],
  preview: {
    select: {
      title: '_type',
      media: 'image' // use the image field as thumbnail
    }
  }
}
