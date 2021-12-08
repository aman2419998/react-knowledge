import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";
import AuthReducer from "./AuthReducer";

export default combineReducers( {
    Authentication: AuthReducer,
    form: FormReducer
} );