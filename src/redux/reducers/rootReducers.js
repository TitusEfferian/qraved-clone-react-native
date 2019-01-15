import {combineReducers} from 'redux'

const rootReducers = combineReducers({
    fetchHomePage:require('./fetchHomePage').reducer,
    cities:require('./cities').reducer,
    searchRestorant:require('./searchRestorant').reducer
})

export default rootReducers
