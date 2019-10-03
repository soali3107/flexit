import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import  logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from  '../reducers/root';

export default (preloadedState = {}) => createStore(
    rootReducer, preloadedState, applyMiddleware(thunk, logger)
);