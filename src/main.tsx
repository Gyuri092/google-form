import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Global } from '@emotion/react';
import App from './App';
import reset from './style';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Global styles={reset} />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
