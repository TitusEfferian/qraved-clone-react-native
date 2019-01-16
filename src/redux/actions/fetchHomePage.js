export const REQUEST_DATA_HOME = 'REQUEST_DATA_HOME'
export const REQUEST_DATA_HOME_SUCCESS = 'REQUEST_DATA_HOME_SUCCESS'
export const REQUEST_DATA_HOME_FAILED = 'REQUEST_DATA_HOME_FAILED'


export function requestDataHome(){
    return{
        type:REQUEST_DATA_HOME,
    }
}
