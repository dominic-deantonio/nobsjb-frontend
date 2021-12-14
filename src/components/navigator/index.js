import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useLocation } from "react-router-dom";
import { NavBarButton } from '../navBarButton';


function Navigator(props) {

    const location = useLocation();
    const isLoggedIn = props.user || props.loading;
    return (

        <div>
            <Navbar collapseOnSelect expand="md" bg="danger" variant="dark">
                <Container>
                    <Navbar.Brand href="/">NoBS Jobs</Navbar.Brand>
                    {isLoggedIn && <Navbar.Toggle aria-controls="responsive-navbar-nav" />}
                    {isLoggedIn &&
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav>
                                <NavBarButton url='/create-post' label='Post a Job' />
                                <NavBarButton url='/favorites' label='Favorites' />
                                <NavBarButton url='/profile' label='Profile' />
                            </Nav>
                        </Navbar.Collapse>}
                    {!isLoggedIn &&
                        <Nav>
                            <NavBarButton url='/profile' label='Sign in' />
                        </Nav>}

                </Container>
            </Navbar>
        </div>
    );

}

export default Navigator;