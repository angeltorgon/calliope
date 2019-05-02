import React, {useState} from 'react';

function Signup() {

    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ username, setUsername ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const handleSubmit = function(e) {
        e.preventDefault();
        console.log({firstName, lastName, useState,email, password});
    }

    return (
        <div className="form-container">
            <h2>Sign up</h2>
            <form className="form" onSubmit={handleSubmit}>
                <input onChange={(e)=>{setFirstName(e.target.value)}} value={firstName} type="text" placeholder="first name"></input>
                <input onChange={(e)=>{setLastName(e.target.value)}} value={lastName} type="text" placeholder="last name"></input>
                <input onChange={(e)=>{setUsername(e.target.value)}} value={username} type="text" placeholder="username"></input>
                <input onChange={(e)=>{setEmail(e.target.value)}} value={email} type="text" placeholder="email"></input>
                <input onChange={(e)=>{setPassword(e.target.value)}} value={password} type="text" placeholder="password"></input>
                <button>Sign up</button>
            </form>
        </div>
  )
}

export default Signup;
