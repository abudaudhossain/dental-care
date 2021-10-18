import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                        <Nav.Link as={Link} to="/services">Services</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
                <Navbar.Text>
                <Link to="login"><button className="btn mx-3" style={{ background: "#23CB77", color:"#fff" }}>Login</button></Link>
                    Signed in as: <Link to="/login">Mark Otto</Link>
                </Navbar.Text>
            </Container>
        </Navbar>
    );
};

export default Menu;