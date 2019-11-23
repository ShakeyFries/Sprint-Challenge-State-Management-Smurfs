import React from "react";
import { connect } from "react-redux";
import { getSmurfData } from "./actions";

const SmurfData = props => {
  return (
    <> 
      <button
        onCLick={() => {
          props.getSmurfData()
        }}
      >
        Get Da Smurf!
      </button>
      {props.error && <div>{props.error}</div>}
      {props.isLoading ? (
        <div>Loading Smurf...</div>
      ) : (
        <> 
          <div> Name: {props.smurf.name} </div>
          <div> Age: {props.smurf.age}</div>
          <div> Height: {props.smurf.height} </div>
          <div> {props.smurf.id} </div>
        </>
      )}
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