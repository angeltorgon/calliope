import React, { useState } from 'react';

export default function Login() {
  
  const [ email, setEmail ] = useState(''); 
  const [ password, setPassword ] = useState(''); 

  const handleSubmit = function(e) {
    e.preventDefault();
    console.log({email, password})
  }
  
  return (
    <div className="form-container">
    <h2>Log In</h2>
    <form className="form" onSubmit={handleSubmit}>
        <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" placeholder="email"></input>
        <input onChange={(e) => setPassword(e.target.value)} value={password} type="text" placeholder="password"></input>
        <button>Sign up</button>
    </form>
</div>
  )
}
