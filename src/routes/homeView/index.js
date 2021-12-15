// import { auth } from "../../services/firebase";
// import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { getJobs } from "../../services/api";
import { useState } from "react";
import { SearchBox } from "../../components/searchBox";
import './style.css';

export function HomeView() {
  // const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const [working, setWorking] = useState(false);

  async function doFindJobs(what, where) {
    setWorking(true);
    const jobs = await getJobs(what, where);
    setWorking(false);
    if (jobs === undefined || jobs?.length === 0) {
      // No data to show. Consider showing a toast or an error message?
    } else {
      navigate("/jobs", { state: jobs });
    }
  }

  return (
    <div className='pad-top d-flex flex-column align-items-center'>
      <h1 className="">No BS</h1>
      <SearchBox callback={doFindJobs} working={working} />
    </div>
  );
}
