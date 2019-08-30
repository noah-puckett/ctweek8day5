import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
import { promiseMiddleware } from 'promise-middleware-redux';
import reducer from './reducers';

const composeEnhancers = compose;

export default createStore(
    reducer,
    composeEnhancers(applyMiddleware(promiseMiddleware))
);
