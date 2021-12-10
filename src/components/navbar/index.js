import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useLocation } from "react-router-dom";
import { NavBarButton } from '../navBarButton';


function NavBar(props) {

    const location = useLocation();
    const isLoggedIn = props.user || props.loading;
    return (

        <div>
            <Navbar collapseOnSelect expand="md" bg="danger" variant="dark" className='shadow'>
                <Container>
                    <Navbar.Brand href="/">NoBS Jobs</Navbar.Brand>
                    {isLoggedIn && <Navbar.Toggle aria-controls="responsive-navbar-nav" />}
                    {isLoggedIn &&
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav>
                                <NavBarButton url='/create-post' label='Create Post' />
                                <NavBarButton url='/favorites' label='Favorites' />
                                <NavBarButton url='/profile' label='Profile' />
                            </Nav>
                        </Navbar.Collapse>}
                    {!isLoggedIn &&
                        <Nav>
                            <NavBarButton url='/profile' label='Sign-in' />
                        </Nav>}

                </Container>
            </Navbar>
        </div>
    );

}

export default NavBar;