import { auth } from "../../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import './style.css';
import { useNavigate } from "react-router-dom";

export function HomeView(props) {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  async function doFindJobs() {
    navigate("/jobs", { replace: true });
  }

  return (
    <>
      <div className="container d-flex flex-column search-box">
        <h1 className="text-center">No BS</h1>
        <input className="mt-2" placeholder="What" />
        <input className="mt-2" placeholder="Where" />
        <button className="btn btn-primary mt-2" onClick={doFindJobs}>Find jobs</button>
      </div>

    </>
  );
}
