export const REQUEST_SEARCH_RESTORANT = 'REQUEST_SEARCH_RESTORANT'
export const REQUEST_SEARCH_RESTORANT_SUCCESS = 'REQUEST_SEARCH_RESTORANT_SUCCESS'
export const REQUEST_SEARCH_RESTORANT_FAILED = 'REQUEST_SEARCH_RESTORANT_FAILED'

export const RESET_REDUX_STATE = 'RESET_REDUX_STATE'


export function requestSearchRestorant(query){
    return{
        type:REQUEST_SEARCH_RESTORANT,
        query
    }
}


export function resetReduxState(){
    return{
        type:RESET_REDUX_STATE
    }
}
