import { takeEvery, all } from 'redux-saga/effects'
import { REQUEST_DATA_HOME } from '../redux/actions/actions';
import { fetchHomePage } from './fetchHomePage';

export default function* rootSaga() {
    yield takeEvery('REQUEST_DATA_HOME', fetchHomePage)
}