import { REQUEST_SEARCH_RESTORANT, REQUEST_SEARCH_RESTORANT_SUCCESS, REQUEST_SEARCH_RESTORANT_FAILED, RESET_REDUX_STATE } from "../actions/searchRestorant";


const INITIAL_STATE = {
    data: undefined,
    isFetching: false,
    error: false
}

function resetReduxState(){
    return{
        ...INITIAL_STATE
    }
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
        case REQUEST_SEARCH_RESTORANT:
            return request(state, action)
        case REQUEST_SEARCH_RESTORANT_SUCCESS:
            return success(state, action)
        case REQUEST_SEARCH_RESTORANT_FAILED:
            return failed(state, action)
        case RESET_REDUX_STATE:
            return resetReduxState()
        default:
            return state
    }
}