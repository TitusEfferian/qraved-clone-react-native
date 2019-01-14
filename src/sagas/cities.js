import { call, put } from 'redux-saga/effects'
import { REQUEST_CITIES_SUCCESS, REQUEST_CITIES_FAILED } from '../redux/actions/cities';
import { fetchCitiesApi } from '../apis/cities';

export function* cities(action) {
    try {
        const data = yield call(fetchCitiesApi)
        yield put({ type: REQUEST_CITIES_SUCCESS, data })
    } catch (error) {
        yield put({ type: REQUEST_CITIES_FAILED, error })
    }
}