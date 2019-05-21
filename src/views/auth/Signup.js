import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';

import Loader from 'react-loader-spinner';

import { signUp, passwordsMustMatch } from '../../store/actions';

function Signup(props) {

    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ username, setUsername ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ confirmPassword, setConfirmPassword ] = useState('');

    useEffect(() => {
        console.log(props)
        if(props.isSignedUp) {
            props.history.push('/login');
        } else {
            props.history.push('/signup');
        }
    }, [props.isSignedUp])

    const handleSubmit = function(e) {
        e.preventDefault();
        if(password === confirmPassword) {
            props.signUp({firstName, lastName, username, email, password})
        } else {
            console.log('conditional is working')
            props.passwordsMustMatch();
        }
    }

    return (
        <div className="form-container">
                {props.signingUp ? <Loader
        type="ThreeDots"
        color="#AC5D5E"
        height="50"
        width="50"
      /> : null}
            <h2>Sign up</h2>
            <form className="form" onSubmit={handleSubmit}>
                <input onChange={(e)=>{setFirstName(e.target.value)}} value={firstName} type="text" placeholder="first name"></input>
                <input onChange={(e)=>{setLastName(e.target.value)}} value={lastName} type="text" placeholder="last name"></input>
                <input onChange={(e)=>{setUsername(e.target.value)}} value={username} type="text" placeholder="username"></input>
                <input onChange={(e)=>{setEmail(e.target.value)}} value={email} type="text" placeholder="email"></input>
                <input onChange={(e)=>{setPassword(e.target.value)}} value={password} type="password" placeholder="password"></input>
                {!props.passwordsMatch ? <label>PASSWORDS MUST MATCH</label> : null}
                <input onChange={(e)=>{setConfirmPassword(e.target.value)}} value={confirmPassword} type="password" placeholder="confirm password"></input>
                <button>Sign up</button>
            </form>
        </div>
  )
}

const mapStateToProps = state => ({
    passwordsMatch: state.authReducer.passwordsMatch,
    signingUp: state.authReducer.signingUp,
    isSignedUp: state.authReducer.isSignedUp,
})


export default connect(mapStateToProps, {
    signUp,
    passwordsMustMatch
})(Signup);
