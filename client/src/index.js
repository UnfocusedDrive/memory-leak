import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import './ai.css';
// import App from './App_bak';
// import App from './App'; // main app
import App from './experimental/App'; // experimental stuff


const tokens = {
  '--inner': '#1b2735',
  '--outer': '#090a0f',
};

ReactDOM.render(<App tokens={ tokens } />, document.getElementById('root'));
