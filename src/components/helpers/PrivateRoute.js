import React, { useEffect } from "react";

const PrivateRoute = ({ component: Component, ...props }) => {
    useEffect(() => {
        console.log("component", Component);
    });

    return <Component />;
};

export default PrivateRoute;
