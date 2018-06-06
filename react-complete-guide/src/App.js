import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  
  state = {
      persons: [
        {name: 'Max', age: 28},
        {name: 'Megan', age: 21},
        {name: 'Abbott', age: 22}
      ]
  }

  switchNameHandler = (name) => {
    //console.log('i was clicked');
    this.setState( {
      persons: [
        {name: name, age: 28},
        {name: 'Megan', age: 21},
        {name: 'Abbott', age: 22}
      ]
    })
  }

  render(){
    return (
      <div className="App">
        <h1> Hi </h1>
        <Person 
          name = {this.state.persons[1].name} 
          age = {this.state.persons[1].age}
          click= {()=>this.switchNameHandler("Meeeee")}
        />
        <Person 
          name = {this.state.persons[0].name} 
          age = {this.state.persons[0].age}> Hobbies: Eating </Person>
        
        <button onClick={()=> this.switchNameHandler('Maximilian')}> Swtich name </button>
      </div>
    );    
  }
}

export default App;
