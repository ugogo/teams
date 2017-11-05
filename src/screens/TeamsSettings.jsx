import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-jsonschema-form';
import { schema, uiSchema } from '../helpers/schemas';

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
    showErrorList={false}
  >
    <button className="button-outline" type="submit">
      Generate
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
