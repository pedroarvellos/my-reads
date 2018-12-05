import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {  createStore, applyMiddleware, compose, combineReducers  } from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import searchReducer from './store/reducers/searchReducer';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReduce = combineReducers({
    searchReducer: searchReducer
});

const store = createStore(rootReduce, composeEnhancers(
    applyMiddleware(thunk)
));

const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
