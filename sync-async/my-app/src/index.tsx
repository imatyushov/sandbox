import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from "./App";
import './test';
import './webWorkerAPI'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
if (!root) {
    console.error('Root element does not exist in DOM');
}
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

