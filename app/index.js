import 'babel-core/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';


import {
    App
  } from './containers';


const dest = document.getElementById('root');

ReactDOM.render(
  <App />,
  dest
);