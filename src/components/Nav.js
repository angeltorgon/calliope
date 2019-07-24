import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logOut } from '../store/actions/index';

function Nav(props) {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        console.log('Nav is updating');
        setIsLoggedIn(localStorage.getItem('token'));
    });

    const handleLogOut = function () {
        setIsLoggedIn(false);
        props.logOut();
    };

    return (
        <>
            {isLoggedIn ?
                <nav className="navbar">
                    <div to="/dashboard" className="logo">
                        <img alt="icon" src="https://img.icons8.com/ios-glyphs/30/000000/quill-with-ink.png" />
                        Calliope</div>

                    <div className="cta-container">
                        <NavLink to="/poem-form" className="nav-cta" >Add Poem</NavLink>
                        <NavLink to="/dashboard" className="nav-cta">Feed</NavLink>
                        <NavLink to={`/profile/${localStorage.getItem('userId')}`} className="nav-cta">Profile</NavLink>
                        <NavLink onClick={() => handleLogOut()} to="/" className="nav-cta login">Log Out</NavLink>
                    </div>
                    
                    <div className="mobile-cta-container">
                        <NavLink to="/poem-form" className="nav-cta" ><img alt="icon" src="https://img.icons8.com/ios/30/000000/plus-2-math.png"/></NavLink>
                        <NavLink to="/dashboard" className="nav-cta"><img alt="icon" src="https://img.icons8.com/ios/30/000000/activity-feed.png"/></NavLink>
                        <NavLink to={`/profile/${localStorage.getItem('userId')}`} className="nav-cta"><img alt="icon" src="https://img.icons8.com/ios/30/000000/gender-neutral-user.png"/></NavLink>
                        <NavLink onClick={() => handleLogOut()} to="/" className="nav-cta"><img alt="icon" src="https://img.icons8.com/ios/30/000000/exit.png"/></NavLink>
                    </div>
                </nav>
                :
                <nav className="navbar">
                    <NavLink to="/" className="logo">
                        <img alt="icon" src="https://img.icons8.com/ios-glyphs/30/000000/quill-with-ink.png" />
                        Calliope</NavLink>
                    <div className="link-container">
                    </div>

                    <div className="cta-container">
                        <NavLink to="/signup" className="nav-cta signup">Sign up</NavLink>
                        <NavLink to="/login" className="nav-cta login">Log in</NavLink>
                    </div>
                    <div className="mobile-cta-container">
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
