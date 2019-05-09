import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {

    useEffect(() => {
        console.log("useEffect works!")
    })

    return (
        <>
        {false ? 
            <nav className="nav">
                {/* <img className="logo" src="" alt="logo"></img> */}
                <div to="/dashboard" className="logo">Calliope</div>
                <div className="link-container">
                    <NavLink to="/dashboard" className="link">Feed</NavLink>
                </div>
                
                <div className="cta-container">
                    <NavLink to="/profile" className="nav-cta login">Profile</NavLink>
                    <NavLink to="/settings" className="nav-cta login">Settings</NavLink>
                </div>
            </nav>
        :
            <nav className="nav">
                {/* <img className="logo" src="" alt="logo"></img> */}
                <NavLink to="/" className="logo">Calliope</NavLink>
                <div className="link-container">
                    <div className="link">Blog</div>
                    <div className="link">Learn</div>
                    <div className="link">About Us</div>
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
export default Nav;
