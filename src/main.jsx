import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import DetailContext from './components/DetailContext.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
  <DetailContext>
    <App />
  </DetailContext>
    </BrowserRouter>
  </React.StrictMode>,
)
