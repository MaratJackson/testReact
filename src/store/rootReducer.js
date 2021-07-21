import {createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as comments } from '../redux/reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    comments
});

export const store = createStore(rootReducer, applyMiddleware(thunk))