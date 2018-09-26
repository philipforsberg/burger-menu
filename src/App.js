import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I am a React app</h1>
        <Person />
      </div>
    );
  }
}

export default App;
