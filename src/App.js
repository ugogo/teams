/* eslint-disable react/jsx-filename-extension */

import React, { Component } from 'react';
import Storage from './helpers/storage';
import TeamsSettings from './screens/TeamsSettings';
import PlayersNamer from './screens/PlayersNamer';
import TeamsCompleted from './screens/TeamsCompleted';
import StoreSettingForm from './misc/StoreSettingForm';

class App extends Component {
  state = {
    users: [],
    screenStep: 1,
  }

  onFormSubmit = ({ formData }) => {
    const { screenStep } = this.state;

    this.setState({
      ...formData,
      screenStep: screenStep + 1,
    });
  }

  saveSetting = ({ formData }) => {
    const { name } = formData;

    Storage.set(name, this.state);
  }

  render() {
    const { screenStep } = this.state;

    return (
      <div className="App">
        { screenStep === 1 && (
          <TeamsSettings
            formData={this.state}
            onSubmit={this.onFormSubmit}
          />
        )}

        { screenStep === 2 && (
          <PlayersNamer
            formData={this.state}
            onSubmit={this.onFormSubmit}
          />
        )}

        { screenStep === 3 && ([
          <TeamsCompleted
            key="teams-completed"
            user_by_team={this.state.user_by_team}
            users={this.state.users}
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
