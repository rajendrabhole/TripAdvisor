
import TYPE from "../types/Types";

const initalState = {
  tripData: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initalState, action: { type: any; tripData: any[]; }) => {
  switch (action.type) {
    case TYPE.LOAD:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case TYPE.LOAD_SUCCESS:
      return {
        ...state,
        tripData: action.tripData,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;