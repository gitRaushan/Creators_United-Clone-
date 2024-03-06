import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot instead of ReactDOM
import { BrowserRouter } from 'react-router-dom';
import App from './App';


const root = createRoot(document.getElementById('root')); // Create a root instance

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
