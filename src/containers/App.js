import React, { Component } from "react";
import classes from "./App.css";
import Cockpit from "../components/Cockpit/Cockpit";
import Persons from "../components/Persons/Persons";

// const StyledButton = styled.button`
//   background-color: ${(props) => (props.alt ? "red" : "green")};
//   color: white;
//   font: inherit;
//   border: 1x solid gray;
//   padding: 8px;
//   curser: pointer;

//   &:hover {
//     background-color: ${(props) => (props.alt ? "salmon" : "lightgreen")};
//     color: black;
//   }
// `;

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
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
        </div>
      );
    }

    /***************** */

    /***************** */
    return (
      <div className={classes.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          togglePersons={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
