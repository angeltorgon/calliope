import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
        <nav className="nav">
                {/* <img className="logo" src="" alt="logo"></img> */}
                <div className="logo">Song Manager</div>
                <div>
                    <a>Blog</a>
                    <a>Learn</a>
                    <a>About Us</a>
                </div>
                <div className="CTA">
                    <a>Sign up</a>
                    <a>Log in</a>
                </div>
        </nav>
        )
    }
}

export default Nav;
