import React, { useEffect } from "react";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import PoemList from "../components/PoemList.js";
import Navbar from "../components/Navbar.js";
import BottomNavbar from "../components/BottomNavbar";
import useStyles from "./styles/_home"

function Home() {
    const classes = useStyles()
    return (
        <div>
            <Navbar />
            <div className={classes.poemListContainer} ><PoemList /></div>
            <BottomNavbar />
        </div>
    );
}

const mapStateToProps = state => {
    return {};
};

export default connect(
    mapStateToProps,
    // { fetchPoems }
)(Home);
