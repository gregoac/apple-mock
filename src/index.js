import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './fonts/HelveticaNeue.ttc';
import './fonts/HelveticaNeue-Bold.ttf';
import './fonts/HelveticaNeue-Light.ttf';
import './fonts/HelveticaNeue-Medium.ttf';
import './fonts/HelveticaNeue-Thin.ttf';
import Router from './router/Router.js';

ReactDOM.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
