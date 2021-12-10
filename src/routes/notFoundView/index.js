import { auth } from "../../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";


export function NotFoundView() {
  const [user, loading, error] = useAuthState(auth);

  return (
    <>
      <p> This is the not found view</p>
    </>
  );
}
