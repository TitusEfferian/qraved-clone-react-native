import { call, put } from 'redux-saga/effects'
import { REQUEST_DATA_HOME_SUCCESS, REQUEST_DATA_HOME_FAILED } from '../redux/actions/fetchHomePage';
import { fetchCitiesApi } from '../apis/cities';

export function* fetchHomePage(action) {
    try {
        const data = yield call(fetchCitiesApi)
        yield put({ type: REQUEST_DATA_HOME_SUCCESS, data })
    } catch (error) {
        yield put({ type: REQUEST_DATA_HOME_FAILED, error })
    }
}