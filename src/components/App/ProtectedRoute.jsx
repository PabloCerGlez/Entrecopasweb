import { Navigate } from 'react-router-dom';
import React from 'react';

function ProtectedRoute(props) {
    const token = localStorage.getItem('token');

    if (!token) {
        return <Navigate to="/login" replace />;
    }

    // Si el token existe, renderiza el componente que se pasó a través de props
    return React.cloneElement(props.component, props);
}


export default ProtectedRoute;
