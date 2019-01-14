import {combineReducers} from 'redux'

const rootReducers = combineReducers({
    fetchHomePage:require('./fetchHomePage').reducer,
    cities:require('./cities').reducer
})

export default rootReducers
