import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from "react-router-dom";
import App from './App.jsx'
import "../Translation/i18n.jsx"
import './index.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>
);
