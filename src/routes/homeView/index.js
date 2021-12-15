import { useNavigate } from "react-router-dom";
import { getJobs } from "../../services/api";
import { useState } from "react";
import { SearchBox } from "../../components/searchBox";
import './style.css';
import logo from '../../../src/logo.png';

export function HomeView() {
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
      <div className="d-flex flex-row align-items-center p-3">
        <h1 className="pe-3">No BS</h1>
        <img src={logo} style={{ width: '70px' }} />
      </div>
      <SearchBox callback={doFindJobs} working={working} />
    </div>
  );
}
