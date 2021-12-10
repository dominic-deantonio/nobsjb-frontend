import { auth } from "../../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import './style.css';
import { useNavigate } from "react-router-dom";
import { getJobs } from "../../services/api";
import { useState } from "react";
import Loader from "react-loader-spinner";
import { LoaderButton } from "../../components/loaderButton";

export function HomeView() {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const [working, setWorking] = useState(false);

  async function doFindJobs() {
    setWorking(true);
    const jobs = await getJobs();
    if (jobs === undefined || jobs?.length === 0) {
      // No data to show. Consider showing a toast or an error message?
    } else {
      navigate("/jobs", { state: jobs });
    }
    setWorking(false);
  }

  return (
    <>
      <div className="container d-flex flex-column search-box">
        <h1 className="text-center">No BS</h1>
        <input className="mt-2" placeholder="What" />
        <input className="mt-2" placeholder="Where" />
        <LoaderButton label='Find jobs' onClick={doFindJobs} working={working} />
      </div>
    </>
  );
}
