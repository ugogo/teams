import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-jsonschema-form';

const USER_KEY_PREFIX = '___';
const USER_KEY_REGEX = new RegExp(`^${USER_KEY_PREFIX}user_[0-9]*`);

const buildSchema = (total_users) => {
  const schemaWrapper = {
    type: 'object',
    required: [],
    properties: {
    },
  };

  for (let i = 1; i <= total_users; i += 1) {
    const userKey = `${USER_KEY_PREFIX}user_${i}`;

    schemaWrapper.properties[userKey] = {
      type: 'string',
      title: `User ${i}`,
    };

    schemaWrapper.required.push(userKey);
  }

  return schemaWrapper;
};

const setUsersIntoArray = data => (
  Object
    .keys(data)
    .reduce((acc, key) => {
      const match = key.match(USER_KEY_REGEX);

      if (match) {
        data.users.push(data[key]);
      }

      return data;
    }, data)
);

const PlayersNamer = ({ formData, onSubmit }) => {
  const schema = buildSchema(formData.total_users);

  return [
    <h3 key="heading">
      Name your users
    </h3>,

    <Form
      key="form"
      formData={formData}
      schema={schema}
      onSubmit={(data) => {
        const dataWithUsers = setUsersIntoArray(data.formData);

        onSubmit({
          formData: dataWithUsers,
        });
      }}
    >
      <button type="submit">
        Next
      </button>
    </Form>,
  ];
};

PlayersNamer.propTypes = {
  onSubmit: PropTypes.func,
  formData: PropTypes.shape({
    total_users: PropTypes.number.isRequired,
  }).isRequired,
};

PlayersNamer.defaultProps = {
  onSubmit: null,
};

export default PlayersNamer;
