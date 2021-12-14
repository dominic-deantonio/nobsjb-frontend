import { Outlet, useLocation } from "react-router-dom";
import { HomeView } from "./routes/homeView";
import Navigator from './components/navigator';
import { auth } from "./services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";


export default function App() {
  const location = useLocation();
  const [user, loading, error] = useAuthState(auth);

  return (
    <>
      <Navigator user={user} loading={loading} />
      {location.pathname === '/' && <HomeView user={user} loading={loading} />}
      <Outlet />      
    </>
  );
}