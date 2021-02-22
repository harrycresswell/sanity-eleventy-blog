import {MdVideoLibrary} from 'react-icons/md'

export default {
  name: 'video',
  type: 'object',
  title: 'Video',
  icon: MdVideoLibrary,
  fields: [
    {
      name: 'videoLabel',
      type: 'string',
      title: 'Video Label'
    },
    {
      name: 'url',
      type: 'string',
      title: 'URL'
    }
  ]
}
