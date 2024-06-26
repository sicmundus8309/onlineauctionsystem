import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from './App';
import {CookiesProvider} from "react-cookie";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <CookiesProvider defaultSetOptions={{ path: '/' }}>
    <App />
   </CookiesProvider> 
  </React.StrictMode>
);

reportWebVitals();
