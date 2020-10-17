import React, { Component } from "react";
import styled from "styled-components";
import "./App.css";
import Person from "./Person/Person";

const StyledButton = styled.button`
  background-color: ${(props) => (props.alt ? "red" : "green")};
  color: white;
  font: inherit;
  border: 1x solid gray;
  padding: 8px;
  curser: pointer;
  &:hover {
    background-color: ${(props) => (props.alt ? "salmon" : "lightgreen")};
    color: black;
  }
`;

class App extends Component {
  state = {
    persons: [
      { id: "dfvv", name: "max", age: 23 },
      { id: "we3", name: "loki", age: 40 },
      { id: "er5", name: "steph", age: 88 },
    ],
    otherState: "Some other value",
    showPersons: false,
  };
  /*************************** */
  //   switchNameHandler = (newName) => {
  //     // console.log('Was clicked');
  // this.setState({
  //   persons:
  //   [
  //       {name : newName, age : 44},
  //       {name : "loki", age : 44},
  //     ]
  // })
  //   }
  /***************************** */

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons,
    });
  };
  /************************** */

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };
  /***************************** */

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  /**************************** */
  render() {
    // const style = {
    //   backgroundColor: "white",
    //   font: "inherit",
    //   border: "1x solid gray",
    //   padding: "8px",
    //   curser: "pointer",
    // };

    /******************* */
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }
    /***************** */
    return (
      <div className="App">
        <h1>Hello world kh khhkhkkhk</h1>
        <p>this is working and i love it </p>
        <StyledButton
          alt={this.state.showPersons}
          onClick={this.togglePersonsHandler}
        >
          Switch Hide/View
        </StyledButton>
        {persons}
      </div>
    );

    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'blablablablablalbabla'), 'Hi, I\'m a React App!! ' );
  }
}

export default App;
