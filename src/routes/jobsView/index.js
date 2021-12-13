import { auth } from "../../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { JobCard } from "../../components/jobCard";
import { Container, ListGroup } from "react-bootstrap";
import { ScrollSync, ScrollSyncPane } from 'react-scroll-sync';
import useWindowDimensions from "../../hooks";
import { JobDetail } from "../../components/jobDetail";
import { useState } from "react";
import { SearchBox } from "../../components/searchBox";
import { getJobs } from "../../services/api";

export function JobsView() {
  const [user, loading, error] = useAuthState(auth);
  const { state } = useLocation(); // The search results from home page
  const navigate = useNavigate();
  const { height, width } = useWindowDimensions(); // Needed to enable ind. scroll
  const scrollbarOffset = 5; // The scrollbar was ending up offscreen

  const [jobs, setJobs] = useState(state); // Take initial results from prev page and use for iniital val
  const [selectedJob, setSelectedJob] = useState(state[0]); // Select 0th entry as default selected job
  const [searching, setSearching] = useState(false); // Toggles the search button and any other state needed while searching for jobs

  const selectJob = (job) => {
    console.log(job.id);
    setSelectedJob(job);
  }

  const doNewSearch = async (what, where) => {
    setSearching(true);
    try {
      const results = await getJobs(what, where);
      setJobs(results);
    } catch (e) {
      console.log(e);
    }
    setSearching(false);
  }

  return (
    <div className="row" style={{ width: width - scrollbarOffset }}>
      <div className="col-md-5 overflow-auto" style={{ height: height + 100 }}>
        <section>
          <div className="container pt-3">
            <div className="card bg-light p-2">
              <h3 className='mt-3'>Search</h3>
              <SearchBox callback={doNewSearch} working={searching} />
            </div>
            <hr />
            {jobs.map((job, i) =>
              <JobCard
                key={i}
                job={job}
                select={() => selectJob(job)}
                isSelected={selectedJob.id === job.id}
              />
            )}
          </div>
        </section>
      </div>
      <div className="d-none d-md-block col-md overflow-auto" style={{ height: height }}>
        <JobDetail job={selectedJob} />
      </div>
    </div>
  );
}
