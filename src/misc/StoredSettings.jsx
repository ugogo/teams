import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Storage from '../helpers/storage';

class StoredSettings extends Component {
  static propTypes = {
    applySetting: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    const settings = Storage
      .keys()
      .map(setting => ({
        name: setting,
        value: Storage.get(setting),
      }));

    this.state = { settings };
  }

  applySetting = (setting) => {
    const { applySetting } = this.props;
    const { value } = setting;

    applySetting(value);
  }

  removeSetting = ({ name }) => {
    const { settings } = this.state;
    const filteredSettings = settings.filter(setting => setting.name !== name);

    Storage.remove(name);

    this.setState({
      settings: filteredSettings,
    });
  }

  render() {
    const { settings } = this.state;

    if (!settings.length) {
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
          <p key={setting.name}>
            <strong>{ setting.name }</strong>
          </p>,

          <pre key="setting-code">
            <code>
              { JSON.stringify(setting.value) }
            </code>
          </pre>,

          <button
            key="button-apply-setting"
            className="button"
            onClick={() => this.applySetting(setting)}
            style={{ marginRight: 5 }}
          >
            Apply
          </button>,

          <button
            key="button-remove-setting"
            className="button button-outline"
            onClick={() => this.removeSetting(setting)}
          >
            Remove
          </button>,

          <hr key="separator" />,
        ])}
      </div>,
    ];
  }
}


export default StoredSettings;
