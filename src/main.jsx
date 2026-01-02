import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import INSTAGRAM from'../index.jsx'
import '../style.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <INSTAGRAM/>
  </StrictMode>,
)
