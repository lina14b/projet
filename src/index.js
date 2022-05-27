import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './Redux/store.js'
import {Provider}  from 'react-redux'

//const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(
  <Provider  store={store}> 
  
    <App />
  </Provider>,
document.getElementById('root')
);

 