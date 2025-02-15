import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import state from './store/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={state}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
