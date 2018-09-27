import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person.js';

class App extends Component {
  state = {
    persons: [
      {name: 'Bob', age: 25},
      {name: 'Bill', age: 23},
      {name: 'Bella', age: 22}
    ]
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        {name: 'Robert', age: 25},
        {name: 'Bill', age: 23},
        {name: 'Bella', age: 20}
      ]
    });
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Robert', age: 25},
        {name: event.target.value, age: 23},
        {name: 'Bella', age: 20}
      ]
    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I am a React app</h1>
        <button
          style={style}
          onClick={this.switchNameHandler}>Switch name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}/>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler}
          changed={this.nameChangeHandler} >Hobbies: Golfing</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
