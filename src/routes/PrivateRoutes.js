import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoutes = (props) => {
    const isAuthenticated = JSON.parse(localStorage.getItem("userData"));

    // RETURN
    return isAuthenticated ? props.children : <Navigate to="/login" />;
};

export default PrivateRoutes;
