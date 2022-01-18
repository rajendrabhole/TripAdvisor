import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import reducer from "../redux/reducers/dataReducer";

export const store = createStore(reducer, applyMiddleware(thunkMiddleware));