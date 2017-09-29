/* eslint-disable react/jsx-filename-extension */

import React, { Component } from 'react';
import TeamsSettings from './screens/TeamsSettings';
import PlayersNamer from './screens/PlayersNamer';

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
      </div>
    );
  }
}

export default App;
