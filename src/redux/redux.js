import {createStore, combineReducers} from 'redux';
import postsDataReducer from './postsDataReducer';

let reduces = combineReducers({
    postsDataReducer
});

let store = createStore(reduces);

export default store;