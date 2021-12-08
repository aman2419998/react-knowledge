import { SIGN_IN, SIGN_OUT } from "./type"

export const signIn = ( payload = null ) => {
    return {
        type: SIGN_IN,
        payload: payload
    }
}

export const signOut = ( payload = null ) => {
    return {
        type: SIGN_OUT,
        payload: payload
    }
}