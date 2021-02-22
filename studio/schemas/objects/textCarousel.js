import {MdViewList} from 'react-icons/md'

export default {
  name: 'textCarousel',
  type: 'object',
  title: 'Text Carousel',
  icon: MdViewList,
  fields: [
    {
      name: 'sectionOneTitle',
      type: 'string',
      title: 'Section One Title'
    },
    {
      name: 'sectionOneText',
      type: 'excerptPortableText',
      title: 'Section One Text'
    },
    {
      name: 'sectionTwoTitle',
      type: 'string',
      title: 'Section Two Title'
    },
    {
      name: 'sectionTwoText',
      type: 'excerptPortableText',
      title: 'Section Two Text'
    },
    {
      name: 'sectionThreeTitle',
      type: 'string',
      title: 'Section Three Title'
    },
    {
      name: 'sectionThreeText',
      type: 'excerptPortableText',
      title: 'Section Three Text'
    }
  ],
  preview: {
    select: {
      title: '_type'
    }
  }
}
