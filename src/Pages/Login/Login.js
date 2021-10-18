import React, { useState } from 'react';
import "./Login.css"

const Login = () => {
    //============ handleLogin area ==============
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log(userName, password);
    }

    const handleUser = (e) => {
        setUserName(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    //============ handleLogin area ==============

    //============ handleSign Up area ============== 
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
        console.log(newUsername, newPassword, newEmail)
    }
    //============ handleSign Up area ==============
    // console.log(userName, password);
    return (
        <div>
            <div className="login-wrap">
                <div className="login-html">               
                    <input id="tab-1" type="radio" name="tab" className="sign-in"/><label htmlFor ="tab-1" className="tab">Sign In</label>
                    <input id="tab-2" type="radio" name="tab" className="sign-up" /><label htmlFor ="tab-2" className="tab">Sign Up</label>
                    
                    <div className="login-form">
                        
                        {/* ===========Login area star  =================*/}
                        <div className="sign-in-htm">
                            <div className="group">
                                <label htmlFor ="user" className="label">Username</label>
                                <input onChange={handleUser} id="user" type="text" className="input" />
                            </div>
                            <div className="group">
                                <label htmlFor ="pass" className="label">Password</label>
                                <input onChange={handlePassword} id="pass" type="password" className="input" data-type="password" />
                            </div>
                            <div className="group">
                                <input id="check" type="checkbox" className="check" checked />
                                <label htmlFor ="check"><span className="icon"></span> Keep me Signed in</label>
                            </div>
                            <div className="group">
                                <input onClick={handleLogin} type="submit" className="button" value="Sign In" />
                            </div>
                            <div className="hr"></div>
                            <button className="btn btn-danger m-3"><i className="fab fa-google-plus-g"></i> Login With Goole</button>
                            <div className="foot-lnk">
                                <a href="#forgot">Forgot Password?</a>
                            </div>
                        </div>
                        {/* ===========Login area end  =================*/}
                        {/* ===========Sign up area star  =================*/}
                        <div className="sign-up-htm">
                            <div className="group">
                                <label htmlFor ="user" className="label">Username</label>
                                <input onChange={handleNewUsername} id="user" type="text" className="input" />
                            </div>
                            <div className="group">
                                <label htmlFor ="pass" className="label">Password</label>
                                <input onChange ={handleNewPassword} id="pass" type="password" className="input" data-type="password" />
                            </div>
                            
                            <div className="group">
                                <label htmlFor ="email" className="label">Email Address</label>
                                <input onChange ={handleNewEmail} id="email" type="email" className="input" />
                            </div>
                            <div className="group">
                                <input onClick={handleSignUp} type="submit" className="button" value="Sign Up" />
                            </div>
                            <div className="hr"></div>
                            <button className="btn btn-danger m-3"><i className="fab fa-google-plus-g"></i> Login With Goole</button>
                            <div className="foot-lnk">
                                <label htmlFor ="tab-1">Already Member?</label>
                            </div>
                        </div>
                        
                        {/* ===========Sign area End  =================*/}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;