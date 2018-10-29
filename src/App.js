import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person.js';

class App extends Component {
  state = {
    persons: [
      {id: 'asd1', name: 'Bob', age: 25},
      {id: 'asd2', name: 'Bill', age: 23},
      {id: 'asd3', name: 'Bella', age: 22}
    ],
    showPersons: false
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

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(pers => {
      return pers.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)} />;
          })}
        </div>
      );

      style.backgroundColor = 'red';
    }

    return (
      <div className="App">
        <h1>Hi, I am a React app</h1>
        <button
          style={style}
          onClick={this.togglePersonHandler}>Toggle persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
