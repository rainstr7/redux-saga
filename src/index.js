import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {compose, createStore, applyMiddleware} from "redux";
import {rootReducer} from "./redux/rootReducer";
import {Provider} from 'react-redux';
import thunk from "redux-thunk";
import {forbiddenWordsMiddleware} from "./redux/middleware";
import createSagaMiddleware from 'redux-saga'
import {sagaWatcher} from "./redux/sagas";

const saga = createSagaMiddleware();

const store = createStore(rootReducer, compose(
    applyMiddleware(thunk, forbiddenWordsMiddleware, saga),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

saga.run(sagaWatcher);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
);

reportWebVitals();
