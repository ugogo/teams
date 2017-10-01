import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-jsonschema-form';

const schema = {
  type: 'object',
  required: ['name'],
  properties: {
    name: {
      type: 'string',
      title: 'Name',
    },
  },
};

const StoreSettingForm = ({ onSubmit }) => (
  <Form
    schema={schema}
    onSubmit={onSubmit}
  >
    <button type="submit">
      Store setting
    </button>
  </Form>
);

StoreSettingForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default StoreSettingForm;
