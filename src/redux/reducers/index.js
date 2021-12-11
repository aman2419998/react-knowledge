import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";
import AuthReducer from "./AuthReducer";
import StreamReducer from "./StreamReducer";

export default combineReducers( {
    Authentication: AuthReducer,
    streams: StreamReducer,
    form: FormReducer
} );