import React from "react";
import BottomNavbar from "../components/BottomNavbar";
import { connect } from "react-redux";

// import { fetchUser, fetchUserPosts } from "../store/actions";

function Profile(props) {
    return (
        <div className="profile-container">

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
