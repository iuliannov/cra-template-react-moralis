# CRA Template for react-moralis

This template is meant to help the users with the extra package configuration which is needed to make sure your react app work with moralis, react-moralis and web3uikit out of the box.

# Quick Start

## Installation

Make sure you have [nodejs](https://nodejs.org/en/download/) installed.

```
npx create-react-app your-app-name --template react-moralis
```

```
cd your-app-name
```

Open the .env file and update the serverUrl and appId.

```jsx
REACT_APP_MORALIS_APPLICATION_ID = xxxxx;
REACT_APP_MORALIS_SERVER_URL = xxxxx;
```

## Usage

Npm

```
npm run start
```

Yarn

```
yarn run start
```

## Start building your app.

The template uses scss for the styles but you can use css or css modules just by removing the index.scss file from index.js and importing your new style files

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import './index.scss'; // <-- remove this
import './index.css'; // import your new style file

import { MoralisProvider } from 'react-moralis';

const APP_ID = process.env.REACT_APP_MORALIS_APPLICATION_ID;
const SERVER_URL = process.env.REACT_APP_MORALIS_SERVER_URL;

ReactDOM.render(
  <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
    <App />
  </MoralisProvider>,
  document.getElementById('root')
);
```
