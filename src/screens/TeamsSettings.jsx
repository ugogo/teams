import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-jsonschema-form';

const schema = {
  type: 'object',
  required: ['user_by_team', 'total_users'],
  properties: {
    total_users: {
      type: 'integer',
      title: 'Total users',
    },
    user_by_team: {
      type: 'integer',
      title: 'Users by team',
    },
  },
};

const uiSchema = {
  total_users: {
    'ui:widget': 'updown',
  },
  user_by_team: {
    'ui:widget': 'updown',
  },
};

const TeamsSettings = ({ formData, onSubmit }) => [
  <h3 key="heading">
    Team settings
  </h3>,

  <Form
    key="form"
    formData={formData}
    schema={schema}
    uiSchema={uiSchema}
    onSubmit={onSubmit}
  >
    <button type="submit">
      Next
    </button>
  </Form>,
];

TeamsSettings.propTypes = {
  onSubmit: PropTypes.func,
};

TeamsSettings.defaultProps = {
  onSubmit: null,
};

export default TeamsSettings;
