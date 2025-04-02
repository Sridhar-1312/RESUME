import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import  'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Navbar from './Navbar.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
  </StrictMode>,
)
