import React from "react";
import { Navigate } from "react-router-dom";

// import { connect } from "react-redux";

const PrivateRoutes = (props) => {
    const isAuthenticated = JSON.parse(localStorage.getItem("userData"));

    // RETURN
    return isAuthenticated ? props.children : <Navigate to="/login" />;
};

// const mapStateToProps = (state) => ({
//     isAuthenticated: !!state?.auth?.user,
//     user: state?.auth?.user,
// });

export default PrivateRoutes;
