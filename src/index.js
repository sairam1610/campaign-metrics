import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import * as serviceWorker from './serviceWorker';
import {watchTableSaga} from "./store/sagas";
import tableReducer from './store/reducers/tableList'

const rootReducer = combineReducers({
    campaignTableState: tableReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer, applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(watchTableSaga);

const app = (
    <Provider store={store}>
        <App></App>
    </Provider>
);
ReactDOM.render(app, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
