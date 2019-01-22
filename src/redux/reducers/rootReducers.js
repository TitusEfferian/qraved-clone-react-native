import {combineReducers} from 'redux'

const rootReducers = combineReducers({
    fetchHomePage:require('./fetchHomePage').reducer,
    cities:require('./cities').reducer,
    searchRestorant:require('./searchRestorant').reducer,
    modal:require('./modalActived').reducer
})

export default rootReducers
