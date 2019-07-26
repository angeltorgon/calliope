import React, { useEffect } from "react";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import PoemList from "../components/PoemList.js";
import { fetchPoems } from "../store/actions";

function Feed(props) {
    useEffect(() => {
        if (localStorage.getItem("token")) {
            props.fetchPoems();
            props.history.push("/dashboard");
        } else {
            props.history.push("/");
        }
    }, []);

    return (
        <div className="feed">
            {props.isFetchingPoems ? (
                <div className="loader">
                    <Loader
                        type="ThreeDots"
                        color="#AC5D5E"
                        height="50"
                        width="50"
                    />
                </div>
            ) : (
                <PoemList poems={props.allPoems} />
            )}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        token: state.authReducer.token,
        allPoems: state.authReducer.allPoems,
        isLoggedIn: state.authReducer.isLoggedIn,
        isFetchingPoems: state.authReducer.isFetchingPoems
    };
};

export default connect(
    mapStateToProps,
    { fetchPoems }
)(Feed);