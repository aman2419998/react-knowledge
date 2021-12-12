import streamsApi from "../../apis/streamsApi"
import history from '../../history'
import {
    CREATE_STREAM,
    DELETE_STREAM,
    EDIT_STREAM,
    FETCH_STREAM,
    FETCH_STREAMS,
    SIGN_IN,
    SIGN_OUT
} from "./type"

export const signIn = ( payload = null ) => {
    return { type: SIGN_IN, payload: payload }
}

export const signOut = ( payload = null ) => {
    return { type: SIGN_OUT, payload: payload }
}

export const createStream = formValues => async ( dispatch, getState ) => {
    const { data } = await streamsApi.post( '/streams', { ...formValues, userId : getState().Authentication.userId } );
    dispatch( { type: CREATE_STREAM, payload: data } );
    history.push( '/' );
}

export const fetchStreams = () => async dispatch => {
    const { data } = await streamsApi.get( '/streams' );
    dispatch( { type: FETCH_STREAMS, payload: data } );
}

export const fetchStream = ( id ) => async dispatch => {
    const { data } = await streamsApi.get( `/streams/${ id }` );
    dispatch( { type: FETCH_STREAM, payload: data } );
}

export const deleteStream = ( id ) => async dispatch => {
    await streamsApi.delete( `/streams/${ id }` );
    dispatch( { type: DELETE_STREAM, payload: id } );
    history.push( '/' );
}

export const editStream = ( id, formValues ) => async dispatch => {
    const { data } = await streamsApi.patch( `/streams/${ id }`, formValues );
    dispatch( { type: EDIT_STREAM, payload: data } );
    history.push( '/' )
}