import React from "react";
import BottomNavbar from "../components/BottomNavbar";
import Navbar from "../components/Navbar";
import { connect } from "react-redux";
import ProfileHeader from "../components/dialogs/ProfileHeader";

// import { fetchUser, fetchUserPosts } from "../store/actions";

function Profile(props) {
    return (
        <div className="profile-container">
            <Navbar />
            <ProfileHeader />
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
