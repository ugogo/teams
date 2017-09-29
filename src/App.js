/* eslint-disable react/jsx-filename-extension */

import React, { Component } from 'react';
import TeamsSettings from './screens/TeamsSettings';

class App extends Component {
  state = {
  }

  onSettingsSubmit = ({ formData }) => {
    this.setState({
      ...formData,
    });
  }

  render() {
    return (
      <div className="App">
        <TeamsSettings
          formData={this.state}
          onSubmit={this.onSettingsSubmit}
        />
      </div>
    );
  }
}

export default App;
