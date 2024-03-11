import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import WebFont from 'webfontloader';
WebFont.load({
  google: {
    families: ['Work Sans:400,500,700', 'sans-serif']
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
