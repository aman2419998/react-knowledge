import { DELETE_STREAM, EDIT_STREAM, FETCH_STREAM, FETCH_STREAMS } from "../actions/type";
import { mapKeys, omit } from 'lodash'

const StreamReducer = ( state = {}, action ) => {
    switch ( action.type ) {
        case FETCH_STREAMS: return { ...state, ...mapKeys( action.payload, 'id' ) }
        case FETCH_STREAM: return { ...state, [ action.payload.id ]: action.payload }
        case EDIT_STREAM: return { ...state, [ action.payload.id ]: action.payload }
        case DELETE_STREAM: return omit( state, action.payload );
        default: return state;
    }

}

export default StreamReducer;