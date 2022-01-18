import Types from "../types/Types";
const jsonData = require('../../asset/trip-list.json');

export const tripDataAction = (data : any) => async (dispatch: (arg0: { type: string; tripData?: []; isError?: boolean; }) => void) =>{
  dispatch({
    type: Types.LOAD,
  });
  try {
    const json = await jsonData;
    dispatch({
      type: Types.LOAD_SUCCESS,
      tripData: json,
      isError: false,
    });
  } catch (e) {
    dispatch({
      type: Types.LOAD_SUCCESS,
      tripData: [],
      isError: true,
    });
  }
};