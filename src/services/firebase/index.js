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
    signInSuccessUrl: '/',
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
        'apple.com',
        'microsoft.com',
        'yahoo.com',
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
};

function SignInScreen() {
    return (
        <div className='d-flex flex-column align-items-center'>
            <h1>NoBS Jobs</h1>
            <p>Please sign-in:</p>            
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </div>
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