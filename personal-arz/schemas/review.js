export default {
    name: 'review',
    title: 'Review',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Reviewer Name',
        type: 'string',
        validation: Rule => Rule.required().max(500).warning('Name should be under 500 characters'),
      },
      {
        name: 'position',
        title: 'Position',
        type: 'string',
        validation: Rule => Rule.max(400).warning('Position should be under 400 characters'),
      },
      {
        name: 'company',
        title: 'Company',
        type: 'string',
        validation: Rule => Rule.max(200).warning('Company name should be under 200 characters'),
      },
      {
        name: 'comment',
        title: 'Comment',
        type: 'text',
        validation: Rule => Rule.max(1000).warning('Comment should be under 1000 characters'),
      },
    ],
    preview: {
      select: {
        title: 'name',
        subtitle: 'company',
      },
    },
  };
  