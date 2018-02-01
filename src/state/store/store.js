// import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createStore } from 'redux'
// import logger from 'redux-logger';
// import thunk from 'redux-thunk';
import searchReducer from '../reducer/searchReducer'

var store = createStore(searchReducer,
// applyMiddleware(logger,thunk)
);


export default store;