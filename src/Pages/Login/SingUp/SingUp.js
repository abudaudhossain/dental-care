import React, { useState } from 'react';

const SingUp = ({ createAccountWithEmailPassword, uerInfoUpdate, googleSignIn }) => {
    const [newUsername, setNewUsername] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newEmail, setNewEmail] = useState('');

    const handleNewUsername = (e) => {
        setNewUsername(e.target.value);
    }
    const handleNewPassword = (e) => {
        setNewPassword(e.target.value)
    }


    const handleNewEmail = (e) => {
        setNewEmail(e.target.value)
    }

    const handleSignUp = () => {
        // console.log(newUsername, newPassword, newEmail)
        createAccountWithEmailPassword(newEmail, newPassword, newUsername);
        uerInfoUpdate(newUsername);
    }
    return (
        <div className="sign-up-htm">

            <div className="group">
                <label htmlFor="user" className="label">Username</label>
                <input onChange={handleNewUsername} id="user" type="text" className="input" />
            </div>
            <div className="group">
                <label htmlFor="pass" className="label">Password</label>
                <input onChange={handleNewPassword} id="pass" type="password" className="input" data-type="password" />
            </div>

            <div className="group">
                <label htmlFor="email" className="label">Email Address</label>
                <input onChange={handleNewEmail} id="email" type="email" className="input" />
            </div>
            <div className="group">
                <input onClick={handleSignUp} type="submit" className="button" value="Sign Up" />
            </div>
            <div className="hr"></div>
            <button onClick={googleSignIn} className="btn btn-danger m-3"><i className="fab fa-google-plus-g"></i> Login With Goole</button>
            <div className="foot-lnk">
                <label htmlFor="tab-1">Already Member?</label>
            </div>
        </div>

    );
};

export default SingUp;