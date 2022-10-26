import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <div style={{ height: "100vh" }} className="d-flex justify-content-center align-items-center">
            <Spinner animation="border" variant="primary" />
        </div>
    }
    if (user) {
        return children;
    }
    else {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate >
    }
};

export default PrivateRoute;