import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';


const middleware = applyMiddleware(thunk, logger);

export const store = createStore(
    rootReducer, 
    composeWithDevTools(middleware)
);