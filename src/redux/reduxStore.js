import allCurrenciesReducer from "./allCurrenciesReducer";
import subscriptionsReducer from "./subscriptionReducer"

import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import {routerReducer} from "react-router-redux";
import routerMiddleware from "react-router-redux/src/middleware";
import {createBrowserHistory} from 'history'


let reducers = combineReducers({
    routing: routerReducer,
    allCurrencies: allCurrenciesReducer,
    allSubscriptions : subscriptionsReducer
});

export let browserHistory = createBrowserHistory();

const middleware = applyMiddleware(promise, thunk, routerMiddleware(browserHistory));
export let store = createStore(reducers, middleware);


export default store;
