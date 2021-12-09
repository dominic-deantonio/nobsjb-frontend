// Import FirebaseAuth and firebase.
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

// Configure Firebase.
const firebaseConfig = {
    apiKey: "AIzaSyCgmeMXGHRuMsafcprc8dOS5rpJ_yq38vA",
    authDomain: "nobs-jobs.firebaseapp.com",
    projectId: "nobs-jobs",
    storageBucket: "nobs-jobs.appspot.com",
    messagingSenderId: "535829721787",
    appId: "1:535829721787:web:910271aff5daffae522f9e"
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

const logout = () => {
    auth.signOut();
};

export {
    auth,
    SignInScreen,
    logout,
};