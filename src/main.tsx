import React from 'react';
import ReactDOM from 'react-dom'; // Corrected import
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render( // Using ReactDOM.render instead of ReactDOM.createRoot
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root') // Passing the root element directly to render
);
