import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import Firebase from "../../firebase";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const [ user, setUser ] = useState(Firebase.checkUser());

    useEffect(() => {
        Firebase.firebaseAuth.onAuthStateChanged (function(user) {
            if (user) {
                // User is signed in.
                setUser(user);
            } else {
                // No user is signed in.
                return null;
            }
        })
    });


    return (
        <Route
            {...rest}
            render={props => {
                if (Firebase.checkUser()) {
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
