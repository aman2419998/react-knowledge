import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './redux/reducers';
import App from './App';

const middlewares = [ thunk ];
const store = createStore( reducers, applyMiddleware( ...middlewares ) );

ReactDOM.render( <Provider store={ store } > <App /> </Provider>, document.getElementById( 'root' ) );
