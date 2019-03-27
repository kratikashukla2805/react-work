import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state ={
    persons: [
      { name: 'MAX', age: 28 },
      { name: 'Kitty', age: 20 },
      { name: 'Shivi', age: 25 }
    ],
    otherState: "hi i am other state",
    showPersons: false
  }

  switchNameHandler = (newName) => {
    console.log("clickeD");

    this.setState({
      persons: [
      { name: newName, age: 28 },
      { name: 'Kitty', age: 20 },
      { name: 'Shivi', age: 24 }
    ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
      {name: 'Max', age: 28 },
      {name: event.target.value, age: 21 },
      {name: 'ssss', age: 78 }
      ]
    })

  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }
  
  deletePersonHandler = () => {

  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px'
    };
    
    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
          {
            this.state.persons.map(person => {
              return <Person
              name={person.name} age={person.age}/>
            })
          }
          
        </div> 
      );
    }

    return (
      <div className="App">
         <h1>hi, I am react</h1>
        <button
          style={style}
          onClick={this.togglePersonHandler}>Toggle Persons
        </button>
        {persons}
      </div>
    );
    // return React.createElement('div', null, React.createElement('h1', {className:"App"}, 'HI I AM REACT!!!!'));
  }
}

export default App;
