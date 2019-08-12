import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...props }) => {
    const token = localStorage.getItem("token");

    const component = token ? <Component /> : <Redirect to="/" />;

    return <Route path="/home" component={Component} />;
};

export default PrivateRoute;
