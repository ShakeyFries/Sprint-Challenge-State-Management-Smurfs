import axios from "axios";

export const SMURFDATA_LOAD_START = "SMURFDATA_LOAD_START";
export const SMURFDATA_LOAD_SUCCESS = "SMURFDATA_LOAD_SUCCESS";
export const SMURFDATA_LOAD_FAILURE = "SMURFDATA_LOAD_FAILURE";

export const getSmurfData = () => dispatch => {
  dispatch({ type: SMURFDATA_LOAD_START });

  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      dispatch({
        type: SMURFDATA_LOAD_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: SMURFDATA_LOAD_FAILURE,
        payload: "You done smurfed up!"
      });
    });
};