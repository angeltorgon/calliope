import React from "react";
import useStyles from "./styles/_profileContainer"
import BottomNavbar from "../components/BottomNavbar";
import PoemList from "../components/PoemList";
import Navbar from "../components/Navbar";
import { connect } from "react-redux";
import ProfileHeader from "../components/ProfileHeader";
import ProfileInfo from "../components/ProfileInfo";

// import { fetchUser, fetchUserPosts } from "../store/actions";

function Profile(props) {
    const classes = useStyles();
    return (
        <div className={classes.profileContainer}>
            <Navbar />
            <ProfileHeader />
            <ProfileInfo />
            <PoemList style={{ marginTop: "480px" }} />
            <BottomNavbar />
        </div>
    );
}

const mapStateToProps = state => {
    return {
        // user: state.authReducer.userInView,
        // poems: state.poemsReducer.userPoems
    };
};

export default connect(
    mapStateToProps,
    // { fetchUser, fetchUserPosts }
)(Profile);
