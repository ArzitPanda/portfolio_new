export default {
    name: 'skills',
    title: 'Skills',
    type: 'document',
    fields: [
      {
        name: 'skill_name',
        title: 'Skill Name',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'icon',
        title: 'Icon',
        type: 'image',
        options: {
          hotspot: true
        },
        validation: Rule => Rule.required()
      }
    ]
  }
  