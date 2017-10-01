import React from 'react';
import Storage from '../helpers/storage';

const StoredSettings = () => {
  const settings = Storage
    .keys()
    .map(setting => ({
      name: setting,
      value: Storage.get(setting),
    }));

  if (!settings) {
    return (
      <p>No settings saved</p>
    );
  }

  return [
    <h3 key="title">
      Saved settings
    </h3>,

    <div key="settings">
      { settings.map(setting => [
        <p key={setting}>
          <strong>{ setting.name }</strong>
          <br />
        </p>,

        <pre key="setting-code">
          <code>
            { JSON.stringify(setting.value) }
          </code>
        </pre>,

        <hr key="separator" />,
      ]) }
    </div>,
  ];
};

export default StoredSettings;
