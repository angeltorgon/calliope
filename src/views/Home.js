import React, { useEffect } from "react";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import PoemList from "../components/PoemList.js";
import { fetchPoems } from "../store/actions";

function Home(props) {
    return (
        <div className="feed">
            <PoemList poems={props.allPoems} />
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
