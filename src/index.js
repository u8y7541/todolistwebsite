import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { ADD_TODO, REMOVE_TODO } from './actions';
import todoApp from './reducers/todoApp';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

let store = createStore(todoApp)
store.dispatch({type: ADD_TODO, text: "Wake up"})
store.dispatch({type: ADD_TODO, text: "Eat food"})

ReactDOM.render(<Provider store = {store}><App store = {store} /></Provider>, document.getElementById('root'));
registerServiceWorker();
