import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import SignIn from '../SignIn/SignIn';
import SingUp from '../SingUp/SingUp';
import "./Login.css"


const Login = () => {
    // ====================handle authentication =====================
    const { googleSignIn, createAccountWithEmailPassword, uerInfoUpdate, singInWithEmail, user, error } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    if (user.email) {
        history.replace(from);
    }

    return (
        <div>
            <h2 className="text-danger">{error}</h2>
            <div className="login-wrap">

                <div className="login-html">
                    <input id="tab-1" type="radio" name="tab" className="sign-in" /><label htmlFor="tab-1" className="tab">Sign In</label>
                    <input id="tab-2" type="radio" name="tab" className="sign-up" /><label htmlFor="tab-2" className="tab">Sign Up</label>

                    <div className="login-form">

                        {/* ===========Login area star  =================*/}
                        <SignIn googleSignIn={googleSignIn} singInWithEmail={singInWithEmail}></SignIn>

                        {/* ===========Login area end  =================*/}

                        {/* ===========Sign up area star  =================*/}
                        <SingUp createAccountWithEmailPassword={createAccountWithEmailPassword} uerInfoUpdate={uerInfoUpdate} googleSignIn={googleSignIn}></SingUp>

                        {/* ===========Sign area End  =================*/}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;