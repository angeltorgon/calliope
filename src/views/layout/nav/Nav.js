import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logOut } from '../../../store/actions/index';

function Nav(props) {
    return (
        <>
        { localStorage.getItem('token') ? 
            <nav className="navbar">
                {/* <img className="logo" src="" alt="logo"></img> */}
                <div to="/dashboard" className="logo">Calliope</div>
                <div className="link-container">
                    <NavLink to="/dashboard" className="link">Feed</NavLink>
                </div>
                
                <div className="cta-container">
                    <NavLink to={`/profile/${localStorage.getItem('userId')}`} className="nav-cta profile">Profile</NavLink>
                    <NavLink onClick={() => props.logOut()} to="/" className="nav-cta login">Log Out</NavLink>
                </div>
            </nav>
        :
            <nav className="navbar">
                {/* <img className="logo" src="" alt="logo"></img> */}
                <NavLink to="/" className="logo">Calliope</NavLink>
                <div className="link-container">
                    {/* <div className="link">Blog</div>
                    <div className="link">Learn</div>
                    <div className="link">About Us</div> */}
                </div>
                
                <div className="cta-container">
                        <NavLink to="/signup" className="nav-cta signup">Sign up</NavLink>
                        <NavLink to="/login" className="nav-cta login">Log in</NavLink>
                </div>
            </nav>
        }
        </>
    )
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.authReducer.isLoggedIn,
        token: state.authReducer.token,
        user: state.authReducer.user
    }
}

export default connect(mapStateToProps, { logOut })(Nav);
