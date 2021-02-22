import {MdPeople} from 'react-icons/md'

export default {
  name: 'teamGrid',
  type: 'object',
  title: 'Team Grid',
  icon: MdPeople,
  fields: [
    {
      name: 'teamMembers',
      title: 'Team Members',
      description: 'Select team members',
      type: 'array',
      of: [{type: 'reference', to: {type: 'author'}}]
    }
  ],
  preview: {
    select: {
      title: '_type',
      media: 'image' // use the image field as thumbnail
    }
  }
}
