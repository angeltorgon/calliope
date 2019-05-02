import React, { useState } from 'react';

export default function Login() {
  
  const [ email, setEmail ] = useState(''); 
  const [ password, setPassword ] = useState(''); 



  return (
    <div className="form-container">
    <h2>Sign up</h2>
    <form className="form">
        <input value={email} type="text" placeholder="email"></input>
        <input value={password} type="text" placeholder="password"></input>
        <button>Sign up</button>
    </form>
</div>
  )
}
