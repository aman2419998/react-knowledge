import { ACTIONS_CONST } from "../redux.const";

const postsReducer = ( state = [], action ) => {
    switch ( action.type ) {
        case ACTIONS_CONST.FETCH_POST: return action.payload
        default: return state;
    }
}

export default postsReducer;