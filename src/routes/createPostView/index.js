import { auth } from "../../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export function CreatePostView() {
  const [user, loading, error] = useAuthState(auth);

  return (
    <>
      <p> This is the create post view</p>
    </>
  );
}
