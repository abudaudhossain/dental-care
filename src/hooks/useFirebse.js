import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signOut, signInWithEmailAndPassword } from "firebase/auth";
import initializAuthentication from "../firebase/firebase.initialize";


initializAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsloading] = useState(true);

    const auth = getAuth();
    const googleSignIn = () => {
        const googlProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googlProvider)
            .then(result => {
                setUser(result.user);
                setIsloading(false);
                setError("");
            }).catch(error => {
                setError(error.message);
                setIsloading(false);
            })

    }


    const createAccountWithEmailPassword = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setIsloading(false);
                uerInfoUpdate(name);
                setUser(result.user);
                setError("");
            }).catch(error => {
                console.log(error.message)
            })
    }

    const uerInfoUpdate = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
            // Profile updated!
            setUser(auth.currentUser);
            window.location.reload();
            setError("");
            // ...
        }).catch((error) => {
            console.log(error.message)
        });
    }


    const singInWithEmail = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                setUser(result.user);
                console.log(result.user);
                setError("");
                // ...
            })
            .catch((error) => {
                setError(error.message);
                console.log(error.message)
            });

    }

    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log("Sign-out successful.");
            setUser({})
            setIsloading(false);
            setError("");
        }).catch((error) => {
            // An error happened.
            setError(error.message)
            console.log("Sign-out not successful.");
            setError("");
        });
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
                setIsloading(false);
                setError("");
            } else {
                setUser({});
                setIsloading(false);
            }
        });

    }, [])

    return {
        user,
        googleSignIn,
        error,
        isLoading,
        createAccountWithEmailPassword,
        logOut,
        uerInfoUpdate,
        singInWithEmail

    }
}


export default useFirebase;


