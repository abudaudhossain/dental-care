import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner from '../../../aboutBanner.png'

const Banne = () => {
    return (
        <div>
            <Container fluid="lg">
                <Row className="d-flex align-items-center">
                    <Col lg="5" md={6} xs={12}>
                        <h3 className="title">About Us</h3>
                        <span style={{ width: "100px", background: "#23CB77", height: "2px", margin: "5px", display: "block" }}></span>
                        <h1 >GENERAL INFORMATION</h1>

                        <p className="py-3">Praesent venenatis lobortis volutpat. Curabitur ultricies ex vel mi ornare fringilla. Aenean luctus orci ac tellus rutrum posuere. Curabitur sit amet varius erat. Morbi placerat, nulla eu iaculis condimentum.</p>
                        <Link className="m-1" to="services">
                            <button className="btn btn-lg" style={{ background: "#23CB77" }}>Book A Viste</button>
                        </Link>
                    </Col>
                    <Col lg="7" md={6} xs={12} className="d-flex justify-content-center">
                        <Image style={{ height: "80vh" }} src={banner} fluid />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banne;