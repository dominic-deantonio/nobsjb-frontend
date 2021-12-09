import { Outlet, Link, useLocation } from "react-router-dom";
import { HomeView } from "./routes/homeView";

export default function App() {
  const location = useLocation();
  const path = location.pathname;
  return (
    <div>
      <h1>NoBS Jobs</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        {/* <Link className={path === "/create-post" ? 'btn btn-primary' : ''} to="/create-post">Create Post</Link> */}
        <Link to="/create-post">Create Post</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/">Home</Link>
        <Link to="/jobs">Jobs</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/error">Error</Link>
      </nav>
      {location.pathname === '/' && <HomeView />}
      <Outlet />
    </div>
  );
}