import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TransactionProvider } from './context/TransactionContext.jsx';
import { DAppProvider } from "@usedapp/core";
import { DAPP_CONFIG } from './config';

ReactDOM.createRoot(document.getElementById('root')).render(
  <TransactionProvider>
    
    <React.StrictMode>

      <App />

    </React.StrictMode>
    
  </TransactionProvider>
)
