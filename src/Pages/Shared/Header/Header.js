import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useAPI } from '../../../Context/apiContext';

const Header = () => {
    const { user, logOut } = useAPI();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="#home"><h1 className="text-primary"><i className="fab fa-connectdevelop"></i> WeCare</h1></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                            <Nav.Link as={Link} to="/plans">Plans</Nav.Link>
                            <Nav.Link as={Link} to="/profile">View Profile</Nav.Link>
                        </Nav>


                        {
                            user.email ?

                                <Nav>
                                    <button onClick={logOut} className="btn btn-secondary">Sign Out</button>
                                    <Nav.Link eventKey={2} href="#memes">
                                        Sign in as: {user.email}
                                    </Nav.Link>
                                </Nav>

                                :

                                <Nav>
                                    <Nav.Link as={Link} to="/login">Sign In</Nav.Link>
                                </Nav>

                        }

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;