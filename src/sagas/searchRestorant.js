import { call, put } from 'redux-saga/effects'
import { REQUEST_SEARCH_RESTORANT_SUCCESS, REQUEST_SEARCH_RESTORANT_FAILED } from '../redux/actions/searchRestorant';
import { fetchSearchRestorant } from '../apis/searchRestorant';

export function* searchRestorant(action) {
    try {
        const data = yield call(fetchSearchRestorant)
        yield put({ type: REQUEST_SEARCH_RESTORANT_SUCCESS, data })
    } catch (error) {
        yield put({ type: REQUEST_SEARCH_RESTORANT_FAILED, error })
    }
}