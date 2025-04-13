export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Project Title',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        rows: 4,
        validation: Rule => Rule.required()
      },
      {
        name: 'skills',
        title: 'Skills Used',
        type: 'array',
        of: [{ type: 'string' }],
        validation: Rule => Rule.required().min(1)
      },
      {
        name: 'startdate',
        title: 'Start Date',
        type: 'date',
        options: {
          dateFormat: 'YYYY-MM-DD'
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'enddate',
        title: 'End Date',
        type: 'date',
        options: {
          dateFormat: 'YYYY-MM-DD'
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'thumbnail',
        title: 'Thumbnail',
        type: 'image',
        options: {
          hotspot: true
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'project_url',
        title: 'Project URL',
        type: 'url',
        validation: Rule => Rule.uri({
          scheme: ['http', 'https'],
        })
      }
    ]
  }
  