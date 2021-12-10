import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { signOut } from '../../services/firebase';

function NavBar(props) {
    return (
        <div>
            <Navbar bg="primary" variant="dark" className='shadow'>
                <Container>
                    <Navbar.Brand href="/">NoBS Jobs</Navbar.Brand>
                    <Nav className="me-auto">
                        {(props.user || props.loading) && <Nav.Link href="/create-post">Create Post</Nav.Link>}
                        {(props.user || props.loading) && <Nav.Link href="/favorites">Favorites</Nav.Link>}
                        {(props.user || props.loading) && <Nav.Link onClick={signOut}>Sign Out</Nav.Link>}
                        {(!props.user && !props.loading) && <Nav.Link href='/profile'>Sign In</Nav.Link>}
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );

}

export default NavBar;