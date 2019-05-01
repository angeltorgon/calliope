import React, { useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import UserContext from '../../context/user-context';

function Nav() {
    const context = useContext(UserContext);

    useEffect(() => {
        console.log(context.loggedIn)
    })

    return (
        <nav className="nav">
                {/* <img className="logo" src="" alt="logo"></img> */}
                <NavLink to="/dashboard" className="logo">Calliope</NavLink>
                <div className="link-container">
                    <div className="link">Blog</div>
                    <div className="link">Learn</div>
                    <div className="link">About Us</div>
                </div>
                {context.loggedIn ? 
                <div className="cta-container">
                    <NavLink to="/profile" className="nav-cta login">Profile</NavLink>
                    <NavLink to="/settings" className="nav-cta login">Settings</NavLink>
                </div>
                : 
                <div className="cta-container">
                        <NavLink to="/signup" className="nav-cta signup">Sign up</NavLink>
                        <NavLink to="/login" className="nav-cta login">Log in</NavLink>
                </div>
            }
        </nav>
    )
}
export default Nav;
