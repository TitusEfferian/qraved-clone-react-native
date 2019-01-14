import { REQUEST_CITIES, REQUEST_CITIES_SUCCESS, REQUEST_CITIES_FAILED } from '../actions/cities'

const INITIAL_STATE = {
    data: undefined,
    isFetching: false,
    error: false
}

function request(state, action) {
    return {
        data: undefined,
        isFetching: true,
        error: false
    }
}

function success(state, action) {
    return {
        data: action.data,
        isFetching: false,
        error: false
    }
}

function failed(state, action) {
    return {
        data: action.error,
        isFetching: false,
        error: true
    }
}

export function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case REQUEST_CITIES:
            return request(state, action)
        case REQUEST_CITIES_SUCCESS:
            return success(state, action)
        case REQUEST_CITIES_FAILED:
            return failed(state, action)
        default:
            return state
    }
}