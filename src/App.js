/* eslint-disable react/jsx-filename-extension */

import React, { Component } from 'react';
import Storage from './helpers/storage';
import TeamsSettings from './screens/TeamsSettings';
import TeamsCompleted from './screens/TeamsCompleted';
import StoredSettings from './misc/StoredSettings';
import StoreSettingForm from './misc/StoreSettingForm';

class App extends Component {
  state = {
    formData: {},
    screenStep: 1,
  }

  onFormSubmit = ({ formData }) => {
    const { screenStep } = this.state;

    this.setState({
      formData,
      screenStep: screenStep + 1,
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
    const { screenStep } = this.state;

    return (
      <div className="App">
        { screenStep === 1 && ([
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

        { screenStep === 2 && ([
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
