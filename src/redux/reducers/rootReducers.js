import {combineReducers} from 'redux'

const rootReducers = combineReducers({
    fetchHomePage:require('./fetchHomePage').reducer
})

export default rootReducers
