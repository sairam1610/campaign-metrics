import { takeEvery } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";
import {initTableDataSaga} from "./fetchTableSaga";

export function* watchTableSaga() {
    yield takeEvery(actionTypes.LOAD_TABLE_DATA,initTableDataSaga);
}
