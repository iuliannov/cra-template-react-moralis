import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';

import { MoralisProvider } from 'react-moralis';
global.Buffer = global.Buffer || require('buffer').Buffer;

const APP_ID = process.env.REACT_APP_MORALIS_APPLICATION_ID;
const SERVER_URL = process.env.REACT_APP_MORALIS_SERVER_URL;

ReactDOM.render(
  <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
    <App />
  </MoralisProvider>,
  document.getElementById('root')
);
