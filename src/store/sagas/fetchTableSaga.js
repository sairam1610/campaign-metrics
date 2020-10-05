import { put } from "redux-saga/effects";

import * as actions from "../actions/index";
import tableData from "./tableMockData";
export function* initTableDataSaga() {
    yield put(actions.setTableData(tableData));
}
