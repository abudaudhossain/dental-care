import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.confic";

const initializAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializAuthentication;