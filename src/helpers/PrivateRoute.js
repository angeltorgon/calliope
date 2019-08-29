import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {

    return (
        <Route {...rest} render={props => {
            if (rest.user) {
                return <Component {...props} />;
            } else {
                return (<Redirect to={{ pathname: "/", state: { from: props.location } }} />);
            }
        }} />);
};

const mapStateToProps = state => {
    const { user } = state.authReducer;
    return {
        user: user,
    };
};

export default connect(mapStateToProps)(PrivateRoute);