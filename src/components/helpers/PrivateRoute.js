import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import Firebase from "../../firebase";

const PrivateRoute = ({ component: Component, ...rest }) => {


    return (
        <Route
            {...rest}
            render={props => {
                if (localStorage.getItem("token")) {
                    return <Component {...props} />;
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: "/",
                                state: {
                                    from: props.location
                                }
                            }}
                        />
                    );
                }
            }}
        />
    );
};

export default PrivateRoute;
