import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import './ai.css';
// import App from './App_bak';

// export default function NextApp() {

import NextApp from './NextApp.jsx';


const tokens = {
  '--inner': '#1b2735',
  '--outer': '#090a0f',
};

ReactDOM.render(<NextApp tokens={ tokens } />, document.getElementById('root'));
