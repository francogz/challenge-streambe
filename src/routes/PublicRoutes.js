import React from "react";
import { Navigate } from "react-router-dom";

const PublicRoutes = (props) => {
    const isAuthenticated = JSON.parse(localStorage.getItem("userData"));

    // RETURN
    return !isAuthenticated ? props.children : <Navigate to="/dashboard" />;
};

export default PublicRoutes;
