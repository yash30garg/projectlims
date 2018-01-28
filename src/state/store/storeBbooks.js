import { createStore, combineReducers, applyMiddleware } from 'redux';
// import logger from 'redux-logger';
// import thunk from 'redux-thunk';
import bbooksReducer from '../reducer/bbooksReducer'

var storeBbooks = createStore(bbooksReducer,
// applyMiddleware(logger,thunk)
);

export default storeBbooks;