import {
  SMURFDATA_LOAD_START,
  SMURFDATA_LOAD_SUCCESS,
  SMURFDATA_LOAD_FAILURE
} from "../actions";

const initialState = {
  isLoading: false,
  error: "",
  smurf: [{name: "", age: 0, height: "", id: 0}]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SMURFDATA_LOAD_START:
      return {
        ...state,
        isLoading: true
      };
    case SMURFDATA_LOAD_SUCCESS:
      return {
        ...state,
        smurf: action.payload,
        isLoading: false
      };
    case SMURFDATA_LOAD_FAILURE:
      return{
        ...state,
        error: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};

export default reducer; 