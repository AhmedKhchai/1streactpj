import React from "react";
import styled from "styled-components";
// import "./Person.css";

const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;
  @media (min-width: 500px) {
    width: 450px;
  }
`;

const person = (props) => {
  return (
    // <div className="Person">
    <StyledDiv>
      <p onClick={props.click}>
        {" "}
        I'm {props.name} and i am {props.age} years old {props.children}.
      </p>
      <input type="text" onChange={props.changed} />
    </StyledDiv>
  );
};

export default person;
