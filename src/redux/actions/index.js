// import { memoize } from "lodash";
import { chain } from "lodash";
import jsonPlaceholder from "../../api/jsonPlaceholder"
import { ACTIONS_CONST } from "../redux.const"

export const fetchPostAndUser = () => async ( dispatch, getState ) => {
    await dispatch( fetchPost() );
    chain( getState().POSTS )
    .map( 'userId' )
    .uniq()
    .forEach( id => dispatch( fetchUser( id ) ) )
    .value()
}

export const fetchPost = () => async dispatch => {
    const { data } = await jsonPlaceholder.get( '/posts' );
    dispatch( { type: ACTIONS_CONST.FETCH_POST, payload: data } )
}

export const fetchUser = ( userId ) => async dispatch => {
    const { data } = await jsonPlaceholder.get( `/users/${ userId }` );
    dispatch( { type: ACTIONS_CONST.FETCH_USER, payload: data } )
}

// using memoize function single call

// export const fetchUser = userId => dispatch => memoizedFunction( userId, dispatch );
// const memoizedFunction = memoize( async ( userId, dispatch ) => {
//     const { data } = await jsonPlaceholder.get( `/users/${ userId }` );
//     dispatch( { type: ACTIONS_CONST.FETCH_USER, payload: data } )
// } );