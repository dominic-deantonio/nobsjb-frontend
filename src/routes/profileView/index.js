import { auth, signOut, SignInScreen } from "../../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export function ProfileView() {
  const [user, loading, error] = useAuthState(auth);

  return (
    <>
      <p> This is the profile view</p>
      <button className="btn btn-warning" onClick={signOut}>Sign out</button>
      <SignInScreen />
    </>
  );
}
