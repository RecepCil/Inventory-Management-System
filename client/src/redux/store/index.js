import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import allReducers from '../reducers/productReducer';

const logger = createLogger();
export const store = createStore((allReducers, compose(applyMiddleware(thunk, logger))));