import React, { useState } from 'react';

const SignIn = ({ singInWithEmail, googleSignIn }) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // console.log(userName, password);
        singInWithEmail(userName, password);
    }

    const handleUser = (e) => {
        setUserName(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    return (
        <div className="sign-in-htm">

            <div className="group">
                <label htmlFor="user" className="label">Username</label>
                <input onChange={handleUser} id="user" type="text" className="input" />
            </div>
            <div className="group">
                <label htmlFor="pass" className="label">Password</label>
                <input onChange={handlePassword} id="pass" type="password" className="input" data-type="password" />
            </div>
            <div className="group">
                <input id="check" type="checkbox" className="check" checked />
                <label htmlFor="check"><span className="icon"></span> Keep me Signed in</label>
            </div>
            <div className="group">
                <input onClick={handleLogin} type="submit" className="button" value="Sign In" />
            </div>
            <div className="hr"></div>
            <button onClick={googleSignIn} className="btn btn-danger m-3"><i className="fab fa-google-plus-g"></i> Login With Goole</button>
            <div className="foot-lnk">
                <a href="#forgot">Forgot Password?</a>
            </div>
        </div>
    );
};

export default SignIn;