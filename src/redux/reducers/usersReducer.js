import { ACTIONS_CONST } from "../redux.const";

const usersReducer = ( state = [], action ) => {
    switch ( action.type ) {
        case ACTIONS_CONST.FETCH_USER: return [ ...state, action.payload ]
        default: return state;
    }
}

export default usersReducer;