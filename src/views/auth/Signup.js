import React, {useState} from 'react';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions';

function Signup(props) {

    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ username, setUsername ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const handleSubmit = function(e) {
        e.preventDefault();
        props.signUp({firstName, lastName, username, email, password})
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


export default connect(null, {signUp})(Signup);
