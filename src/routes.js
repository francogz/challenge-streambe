import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login.js";
import Dashboard from "./pages/Dashboard.js";
import PrivateRoutes from "./routes/PrivateRoutes.js";
import PublicRoutes from "./routes/PublicRoutes.js";

const RoutesConfig = () => {

    return (
        <Routes>
            <Route
                path="/login"
                element={
                    <PublicRoutes>
                        <Login />
                    </PublicRoutes>
                }
            />

            <Route
                path="/dashboard"
                element={
                    <PrivateRoutes >
                        <Dashboard />
                    </PrivateRoutes>
                }
            />

            <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
    );
};

export default React.memo(RoutesConfig);
