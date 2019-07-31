import React, { useEffect } from "react";
import { connect } from "react-redux";

function Home(props) {
    useEffect(() => {}, [props.isLoggedIn]);

    return (
        <div className="home-container">
            <div className="banner">
                <img
                    src="https://images.unsplash.com/photo-1473186505569-9c61870c11f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                    alt="banner"
                />
            </div>
        </div>
    );
}

const mapStateToProps = state => {

};

export default connect(mapStateToProps)(Home);
