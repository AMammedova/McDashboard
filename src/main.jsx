import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './App.jsx'
import "../Translation/i18n.jsx"
import './index.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
      <ToastContainer
theme="light"
position="top-right"
autoClose={2000}
closeOnClick
pauseOnHover={false}

/>
    <App />
  </Router>
);
