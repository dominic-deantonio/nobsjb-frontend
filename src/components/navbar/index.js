import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../services/firebase';

function NavBar(props) {
    return (
        <div>
            <h1>NoBS Jobs</h1>
            {props.user && <p>Logged in: <Link to="/profile">{props.user?.email}</Link></p>}
            {!props.user && <Link to="/profile">Profile</Link>}
            <p>Env: {process.env.REACT_APP_HELLO}</p>
            <nav
                style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem"
                }}>
                {/* <Link className={path === "/create-post" ? 'btn btn-primary' : ''} to="/create-post">Create Post</Link> */}
                <Link to="/create-post">Create Post</Link><br />
                <Link to="/favorites">Favorites</Link><br />
                <Link to="/">Home</Link><br/>
                <button onClick={logout}>Logout</button>
                {/* <Link to="/jobs">Jobs</Link>
                
                <Link to="/error">Error</Link> */}
            </nav>
        </div>
    );

}

export default NavBar;