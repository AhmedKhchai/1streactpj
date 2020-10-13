import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state ={
    persons: [
      {name : "max", age : 23},
      {name : "loki", age : 40},
    ] 
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked');
this.setState({
  persons:
  [
      {name : newName, age : 44},
      {name : "loki", age : 44},
    ]
})

  }

  nameChangedHandler = (event) => {
    this.setState({
  persons:
  [
      {name : "max", age : 23},
      {name : event.target.value, age : 40},
    ]
})
  } 

  render() {
    const style ={
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid gray',
      padding: '8px',
      curser: 'pointer'
    }
     return (
       <div className="App">
         <h1>Hello world kh khhkhkkhk</h1>
         <p>this is working and i love it </p>
         <button 
         style = {style}
         onClick={this.switchNameHandler.bind(this, 'Bono')}>Switch Name</button>

         <Person name={this.state.persons[0].name}
          age={this.state.persons[0].age}          
          />
         <Person 
         name={this.state.persons[1].name} 
         age={this.state.persons[1].age}
         click={this.switchNameHandler.bind(this, 'my tire is gone !')} 
         changed={this.nameChangedHandler}
         > and i like to sim race</Person>

       </div>
     );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'blablablablablalbabla'), 'Hi, I\'m a React App!! ' );

  }
}

export default App;
