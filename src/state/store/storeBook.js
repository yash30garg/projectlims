import { createStore, combineReducers, applyMiddleware } from 'redux';

import bbooksReducer from '../reducer/bbooksReducer'
var storeBbooks = createStore(bbooksReducer);

export default storeBbooks;