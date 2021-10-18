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
            }).catch(error => {
                setError(error.message);
                setIsloading(false);
            })

    }


    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
                setIsloading(false)
            } else {
                setUser({});
                setIsloading(false);
            }
        });

    }, [])


    const createAccountWithEmailPassword = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                setIsloading(false);
            }).catch(error => {
                console.log(error.message)
            })
    }

    const uerInfoUpdate = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then((result) => {
            // Profile updated!
            console.log("profile updated")
            // ...
        }).catch((error) => {
            console.log(error.message)
        });
    }


    const singInWithEmail = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                setUser(result.user)
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
        }).catch((error) => {
            // An error happened.
            setError(error.message)
            console.log("Sign-out not successful.")
        });
    }

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


