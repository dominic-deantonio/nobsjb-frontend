import { auth } from "../../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export function JobsView() {
  const [user, loading, error] = useAuthState(auth);

  return (
    <>
      <p> This is the jobs view</p>
    </>
  );
}
