import React, { useEffect } from "react";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import PoemList from "../components/PoemList.js";
import Navbar from "../components/Navbar.js";
import BottomNavbar from "../components/BottomNavbar";
// import { fetchPoems } from "../store/actions";

function Home() {
    return (
        <div>
            <Navbar />
            <PoemList />
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
