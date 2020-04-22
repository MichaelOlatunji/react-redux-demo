import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR } from "./userTypes"

export const fetchUserRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

export const fetchUserSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUserError = error => {
    return {
        type: FETCH_USERS_ERROR,
        payload: error
    }
}
