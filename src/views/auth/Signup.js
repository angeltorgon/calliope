import React, {useState} from 'react';

function Signup() {

    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ username, setUsername ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const handleSubmit = function() {
        console.log({})
    }

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
