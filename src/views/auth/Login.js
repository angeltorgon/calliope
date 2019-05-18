import React, { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';

import { logIn } from '../../store/actions';

function Login(props) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    console.log(props.isLoggedIn)
    if (props.isLoggedIn) {
      props.history.push('/dashboard');
    }
  }, [props.isLoggedIn])

  const handleSubmit = function (e) {
    e.preventDefault();
    props.logIn({ username, password })
  }

  return (
    <div className="form-container">
      {props.loggingIn ? <Loader
        type="ThreeDots"
        color="#AC5D5E"
        height="50"
        width="50"
      /> : null}
      <h2>Log In</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input onChange={(e) => setUsername(e.target.value)} value={username} type="text" placeholder="username"></input>
        <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="password"></input>
        <button>Log In</button>
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    loggingIn: state.authReducer.loggingIn,
    isLoggedIn: state.authReducer.isLoggedIn,
    token: state.authReducer.token
  }
}

export default connect(mapStateToProps, { logIn })(Login);