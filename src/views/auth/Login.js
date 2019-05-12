import React, { useState } from 'react';
import { connect } from 'react-redux';

import { logIn } from '../../store/actions';

function Login(props) {
  
  const [ username, setUsername ] = useState(''); 
  const [ password, setPassword ] = useState(''); 

  const handleSubmit = function(e) {
    console.log(props)
    e.preventDefault();
    props.logIn({username, password})
    props.history.push("/dashboard");
  }
  
  return (
    <div className="form-container">
    <h2>Log In</h2>
    <form className="form" onSubmit={handleSubmit}>
        <input onChange={(e) => setUsername(e.target.value)} value={username} type="text" placeholder="username"></input>
        <input onChange={(e) => setPassword(e.target.value)} value={password} type="text" placeholder="password"></input>
        <button>Sign up</button>
    </form>
</div>
  )
}

const mapStateToProps = state => {
  return {}
}

export default connect(null, { logIn } )(Login);