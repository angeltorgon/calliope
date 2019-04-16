import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
        <nav className="nav">
                {/* <img className="logo" src="" alt="logo"></img> */}
                <div className="logo">Song Manager</div>
                <div className="link-container">
                    <a className="link">Blog</a>
                    <a className="link">Learn</a>
                    <a className="link">About Us</a>
                </div>
                <div className="cta-container">
                    <a>Sign up</a>
                    <a>Log in</a>
                </div>
        </nav>
        )
    }
}
export default Nav;
