import {createStore, combineReducers} from 'redux';
import postsDataReducer from './postsDataReducer';

const reduces = combineReducers({
    postsDataReducer
});

const store = createStore(reduces);

export default store;