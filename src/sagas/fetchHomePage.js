import { call, put } from 'redux-saga/effects'
import { REQUEST_DATA_HOME_SUCCESS, REQUEST_DATA_HOME_FAILED } from '../redux/actions/fetchHomePage';
import { fetchHomePagesApi } from '../apis/fetchHomePage';

export function* fetchHomePage(action) {
    try {
        const data = yield call(fetchHomePagesApi)
        yield put({ type: REQUEST_DATA_HOME_SUCCESS, data })
    } catch (error) {
        yield put({ type: REQUEST_DATA_HOME_FAILED, error })
    }
}