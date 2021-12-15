import { Outlet, useLocation } from "react-router-dom";
import { HomeView } from "./routes/homeView";
import Navigator from './components/navigator';
import { auth } from "./services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { createUser } from "./services/api";

export default function App() {
  const location = useLocation();
  const [user, loading] = useAuthState(auth);

  // Extremely suboptimal to call every render, 
  // but the firebase UI exposes
  // no known callback to do something after 
  // successful sign-in or sign-up. We must make backend
  // idempotent for this endpoint
  createUser(user);

  return (
    <>
      <Navigator user={user} loading={loading} />
      {location.pathname === '/' && <HomeView user={user} loading={loading} />}
      <Outlet />
    </>
  );
}