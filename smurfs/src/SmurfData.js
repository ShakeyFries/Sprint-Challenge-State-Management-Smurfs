import React from "react";
import { connect } from "react-redux";
import { getSmurfData } from "./actions";
import axios from "axios";

const SmurfData = props => {
  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState("");
  const [height, setHeight] = React.useState("");
  const smurfette = {
    name: name,
    age: age,
    height: height,
  }

  return (
    <> 
      <button onClick={() => {
          props.getSmurfData();
      }}>Get The Smurfs</button>
      {props.smurf.map(e => {
          return (
          <div>
            {console.log("inside map", e)}
            <h1>{`Name: ${e.name}`}</h1>
            <h3>{`Age: ${e.age}`}</h3>
            <h3>{`Height: ${e.height}`}</h3>
          </div>
          )
      })}
      <input onChange={(e) => {setName(e.target.value)}} value={name} placeholder="name" />
      <input onChange={(e) => {setAge(e.target.value)}} value={age} placeholder="age" />
      <input onChange={(e) => {setHeight(e.target.value)}} value={height} placeholder="height" />
      <button onClick={(e) => {
        e.preventDefault();
        setName("");
        setHeight("");
        setAge("");

        axios.post("http://localhost:3333/smurfs", smurfette)
          .then(res => {
            console.log(res)
          })
          .catch(err => {
            console.log(err)
          });
      }}>Add Da Smurf!</button>
    </>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    error: state.error,
    smurf: state.smurf
  };
};

export default connect (
  mapStateToProps,
  { getSmurfData }
)(SmurfData);