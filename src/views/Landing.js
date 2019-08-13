import React, { useEffect } from "react";
import { connect } from "react-redux";

function Landing(props) {
    useEffect(() => {}, [props.isLoggedIn]);

    return (
        <div className="home-container">
            <div className="banner" />
        </div>
    );
}

const mapStateToProps = state => {
    return {
        state: state
    };
};

export default connect(mapStateToProps)(Landing);
