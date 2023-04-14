import React from 'react';
import ReactDOM from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react'

import App from './App';
import { persistor } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PersistGate loading={'loading'} persistor={persistor}>
      <App />
    </PersistGate>
  </React.StrictMode>
);