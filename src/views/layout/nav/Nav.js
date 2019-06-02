import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logOut } from '../../../store/actions/index';

function Nav(props) {
    return (
        <>
            {localStorage.getItem('token') ?
                <nav className="navbar">
                    {/* <img className="logo" src="" alt="logo"></img> */}
                    <div to="/dashboard" className="logo">
                        <img src="https://img.icons8.com/ios-glyphs/30/000000/quill-with-ink.png"/>
                        Calliope</div>

                    <div className="cta-container">
                        <NavLink to="/poem-form" className="nav-cta" >Add Poem</NavLink>
                        <NavLink to="/dashboard" className="nav-cta">Feed</NavLink>
                        <NavLink to={`/profile/${localStorage.getItem('userId')}`} className="nav-cta">Profile</NavLink>
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
