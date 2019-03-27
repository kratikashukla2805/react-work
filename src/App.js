import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state ={
    persons: [
      { id: '111', name: 'MAX', age: 28 },
      { id: '222', name: 'Kitty', age: 20 },
      { id: '333', name: 'Shivi', age: 25 }
    ],
    otherState: "hi i am other state",
    showPersons: false
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    //altr.// const person = Object.assign({}, this.state.persons[personIndex]);
    
    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({persons: persons})

  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }
  
  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]; // a new array having objects of the older array.
    persons.splice(personIndex, 1); // simply removes 1 person from array
    // its a bad practice, a good practice is to create a copy of persons before manipulating it.

    this.setState({persons: persons}) 

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
            this.state.persons.map((person, index) => {
              return <Person
              click={() => this.deletePersonHandler(index)} //alternative = this.deletePersonHandler(this, index)
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)}/>
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
