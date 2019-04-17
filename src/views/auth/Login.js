import React from 'react'

export default function Login() {
    return (
        <div className="form-container">
            <form className="form">
                <input type="text" placeholder="email or username"></input>
                <input type="text" placeholder="password"></input>
                <button>Log in</button>
            </form>
        </div>
    )
}
