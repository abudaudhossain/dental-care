import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
const TopNavbar = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <h3 className="d-flex align-items-center">
                            <img
                                alt=""
                                src="./favicon.ico"
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />{' '}
                            <span className="title">Dental</span>Care</h3>
                    </Navbar.Brand>

                    <Nav className="ms-auto">
                        <Nav.Link>
                            <i className="fas fa-envelope me-1"></i>
                            info@example.com
                        </Nav.Link>
                        <Nav.Link>
                            <i className="fas fa-phone me-1"></i> + 01 994 589 676
                        </Nav.Link>
                        <Nav.Link>
                            <i className="fas fa-home me-1"></i>Kurigram, RK 10012, BD
                        </Nav.Link>

                    </Nav>

                </Container>
            </Navbar>
        </div>
    );
};

export default TopNavbar;