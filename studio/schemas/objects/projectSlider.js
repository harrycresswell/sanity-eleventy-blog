import {MdCompareArrows} from 'react-icons/md'

export default {
  name: 'projectSlider',
  type: 'object',
  title: 'Project Slider',
  icon: MdCompareArrows,
  fields: [
    {
      name: 'projects',
      title: 'Projects',
      description: 'Select Projects',
      type: 'array',
      of: [{type: 'reference', to: {type: 'project'}}]
    }
  ],
  preview: {
    select: {
      title: '_type',
      media: 'image' // use the image field as thumbnail
    }
  }
}
