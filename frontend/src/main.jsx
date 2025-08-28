// importing dependencies

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx' // where all react code lives, where application is started and where everything is rendered  

// looking for root div inside html file, rendering react application inside 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
