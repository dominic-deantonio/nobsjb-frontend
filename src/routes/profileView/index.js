import { auth, signOut, SignInScreen } from "../../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Container } from "react-bootstrap";

export function ProfileView() {
  const [user, loading, error] = useAuthState(auth);

  if (user || loading) {

    if (loading) {
      return (<p>Loading...</p>);
    }

    return (
      <Container className='d-flex flex-column align-items-center'>
        <div className="m-3">
          <p>Email {user?.email}</p>
          <p>Name {user?.displayName}</p>
          <p>Desired Salary $100,000</p>
        </div>
        <button className="btn btn-warning" onClick={signOut}>Sign out</button>
      </Container>
    );
  } else {
    return (
      <div className='d-flex flex-column align-items-center'>
        <h1>NoBS Jobs</h1>
        <p>Please sign-in or create an account</p>
        <SignInScreen />
      </div>
    );
  }

}
