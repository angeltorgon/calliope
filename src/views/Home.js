import React, { useEffect } from "react";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import PoemList from "../components/PoemList.js";
import { fetchPoems } from "../store/actions";
import Firebase from "../firebase";

function Home(props) {
    const checkAuth = () => {
        const user = Firebase.checkUserStatus();
        console.log(user);
    };

    const signout = () => {
        const user = Firebase.signout();
        console.log(user);
    };

    return (
        <div className="feed">
            <PoemList poems={props.allPoems} />
            <button onClick={checkAuth}>Check if user is authenticated</button>
            <button onClick={signout}>Signout</button>
        </div>
    );
}

const mapStateToProps = state => {
    return {};
};

export default connect(
    mapStateToProps,
    { fetchPoems }
)(Home);
