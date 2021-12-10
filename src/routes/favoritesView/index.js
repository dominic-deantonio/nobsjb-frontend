import { auth } from "../../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export function FavoritesView() {
  const [user, loading, error] = useAuthState(auth);

  return (
    <>
      <p> This is the favorites view</p>
    </>
  );
}
