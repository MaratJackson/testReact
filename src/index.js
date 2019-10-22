import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux';

let renderTree = (state) => {
    ReactDOM.render(
    <App state={state} dispatch={store.dispatch}/>, 
    document.getElementById('root'));
}

renderTree(store.getState());

store.subscribe(()=>{
    let state = store.getState()
    renderTree(state)
});

serviceWorker.unregister();
