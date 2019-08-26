import React from 'react';
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ component: Component, ...rest }) => {


    return (<Route {...rest} render={props => {
        if (localStorage.getItem("token") === null) {
            return <Component {...props} />;
        } else {
            return (
                <Redirect to={{ pathname: "/home", state: { from: props.location } }} />);
        }
    }}
    />
    );
};

export default PublicRoute;
