/* eslint-disable react/jsx-filename-extension */

import React, { Component } from 'react';
import Storage from './helpers/storage';
import TeamsSettings from './screens/TeamsSettings';
import TeamsCompleted from './screens/TeamsCompleted';
import StoredSettings from './misc/StoredSettings';
import StoreSettingForm from './misc/StoreSettingForm';
import { SETTINGS_STEP, TEAMS_STEP } from './helpers/steps';

class App extends Component {
  state = {
    formData: {},
    step: SETTINGS_STEP,
  }

  onFormSubmit = ({ formData }) => {
    this.setState({
      formData,
      step: TEAMS_STEP,
    });
  }

  applySetting = (setting) => {
    this.setState(setting);
  }

  saveSetting = ({ formData }) => {
    const { name } = formData;

    Storage.set(name, this.state);
  }

  render() {
    const { step } = this.state;

    return (
      <div className="App">
        { step === SETTINGS_STEP && ([
          <TeamsSettings
            key="teams-settings"
            formData={this.state.formData}
            onSubmit={this.onFormSubmit}
          />,
          <hr key="separator" />,
          <StoredSettings
            key="stored-setting"
            applySetting={this.applySetting}
          />,
        ])}

        { step === TEAMS_STEP && ([
          <TeamsCompleted
            key="teams-completed"
            formData={this.state.formData}
          />,
          <hr key="separator" />,
          <StoreSettingForm
            key="store-setting-form"
            onSubmit={this.saveSetting}
          />,
        ])}
      </div>
    );
  }
}

export default App;
