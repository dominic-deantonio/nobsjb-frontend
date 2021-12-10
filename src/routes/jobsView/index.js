import { auth } from "../../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { JobCard } from "../../components/jobCard";
import { Container, ListGroup } from "react-bootstrap";

export function JobsView(props) {
  const [user, loading, error] = useAuthState(auth);
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="row">
      <div className="col-sm" overflow>
        <ListGroup>
          <div className="d-flex flex-column">
            {state.map((job, i) =>
              <ListGroup.Item key={i} >
                <JobCard job={job} />
              </ListGroup.Item>
            )}
          </div>
        </ListGroup>
      </div>
      <div className="col-sm">
        <Container>This is the other thing</Container>
      </div>


    </div>

  );
}
