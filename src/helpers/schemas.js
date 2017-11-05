export const schema = {
  type: 'object',
  required: ['by_team', 'users'],
  properties: {
    users: {
      type: 'array',
      title: 'Users',
      minItems: 1,
      items: {
        type: 'string',
      },
    },
    by_team: {
      type: 'integer',
      title: 'How many by team?',
    },
  },
};

export const uiSchema = {
  users: {
    'ui:options': {
      orderable: false,
    },
  },
};
