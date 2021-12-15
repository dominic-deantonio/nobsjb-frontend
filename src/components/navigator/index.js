import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { NavBarButton } from '../navBarButton';
import { getFavorites } from '../../services/api';
import logo from '../../../src/logo.png';


function Navigator(props) {

    const isLoggedIn = props.user || props.loading;
    const navigate = useNavigate();

    async function goToFavorites() {
        const favorites = await getFavorites(props.user);
        console.log(favorites);
        if (favorites === undefined) {
            // No data to show. Consider showing a toast or an error message?
        } else {
            navigate("/favorites", { state: favorites });
        }
    }

    return (

        <div>
            <Navbar collapseOnSelect expand="md" bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <span>No BS </span>
                        <img src={logo} style={{ width: '30px' }} />
                    </Navbar.Brand>
                    {isLoggedIn && <Navbar.Toggle aria-controls="responsive-navbar-nav" />}
                    {isLoggedIn &&
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav>
                                <NavBarButton url='/create-post' label='Post a Job' />
                                <NavBarButton url='/favorites' onClick={goToFavorites} label='Favorites' />
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