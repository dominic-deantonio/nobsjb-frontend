// Import FirebaseAuth and firebase.
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

// Configure Firebase.
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();

// const googleProvider = new firebase.auth.GoogleAuthProvider();

const uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: '/profile',
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
};

function SignInScreen() {
    return (
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    );
}

const signOut = () => {
    auth.signOut();
};

export {
    auth,
    SignInScreen,
    signOut,
};