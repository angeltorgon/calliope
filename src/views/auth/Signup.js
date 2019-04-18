import React from 'react'

function Signup() {
    return (
        <div className="form-container">
            <h2>Sign up</h2>
            <form className="form">
                <input type="text" placeholder="first name"></input>
                <input type="text" placeholder="last name"></input>
                <input type="text" placeholder="username"></input>
                <input type="text" placeholder="email"></input>
                <input type="text" placeholder="password"></input>
                <button>Sign up</button>
            </form>
        </div>
  )
}

export default Signup;
