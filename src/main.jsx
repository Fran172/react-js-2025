import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router } from 'react-router-dom'
import { CarritoProvider } from './context/CarritoContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { AdminProvider } from './context/AdminContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <AuthProvider>
        <AdminProvider>
          <CarritoProvider>
            <App />
            <ToastContainer autoClose={2000}/>
          </CarritoProvider>
        </AdminProvider>
      </AuthProvider>
    </Router>
  </StrictMode>,
)
