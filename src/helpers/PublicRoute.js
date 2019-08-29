
import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux"

const PublicRoute = ({ component: Component, ...rest }) => {


    return (<Route {...rest} render={props => {
        if (rest.user) {
            return (<Redirect to={{ pathname: "/home", state: { from: props.location } }} />);
        } else {
            return <Component {...props} />;
        }
    }}
    />
    );
};

const mapStateToProps = state => {
    const { user } = state.authReducer;
    return {
        user: user,
    };
};

export default connect(mapStateToProps)(PublicRoute);