import { createStore, applyMiddleware, compose } from 'redux';
import playReducer from './reducers/playReducer';

const composeEnhancers = compose;

const myMiddleware = store => next => action => {

    console.log('WHAT IS HAPPENING', action);

    const stateBeforeAction = store.getState();

    next(action);

    if(stateBeforeAction !== store.getState()) {
        console.log('things have changed!', store.getState())
    }
    else {
        console.log('nothing has changed');
    }
    //console log every action
    //MUST call next
    //if state changes console log state
};

const store = createStore(
    playReducer,
    composeEnhancers(applyMiddleware(myMiddleware))
);

store.dispatch({
    type: 'AN_ACTION',
    payload: 'A RESULT'
});
