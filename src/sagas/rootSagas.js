import { takeEvery, all } from 'redux-saga/effects'
import { REQUEST_DATA_HOME } from '../redux/actions/fetchHomePage';
import { fetchHomePage } from './fetchHomePage';
import { REQUEST_CITIES } from '../redux/actions/cities';
import { cities } from './cities';

export default function* rootSaga() {
    yield takeEvery(REQUEST_DATA_HOME, fetchHomePage)
    yield takeEvery(REQUEST_CITIES, cities)
}