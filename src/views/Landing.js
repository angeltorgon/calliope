import React, { useEffect } from "react";
import { connect } from "react-redux";

function Landing(props) {
    useEffect(() => {}, [props.isLoggedIn]);

    return (
        <div className="home-container">
            <div className="banner">
                {/* <img src="https://images.unsplash.com/photo-1432821579285-1b649e5b1ce3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" /> */}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        state: state
    };
};

export default connect(mapStateToProps)(Landing);
