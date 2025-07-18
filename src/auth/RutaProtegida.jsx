import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

function RutaProtegida({ children }) {
    const { isAuth } = useAuth();

    if (!isAuth && location.pathname !== "/") {
        return <Navigate to="/login" replace />;
    }
    return children;
}

export default RutaProtegida;