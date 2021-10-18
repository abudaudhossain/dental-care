import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner from "../../../contact.png";

const Banner = () => {
    return (
        <div>
            <Container fluid="lg">
                <Row className="d-flex align-items-center">
                    <Col lg="5" md={6} xs={12}>
                        <h3 className="title">Contact Us</h3>
                        <span style={{ width: "100px", background: "#23CB77", height: "2px", margin: "5px", display: "block" }}></span>
                        <h1 >Get In Touch Today</h1>

                        <p className="py-3">FREE Dental Chat with dentists or live virtual Teledental video consulting talk with a dentist. Get local emergency dental questions answers online.</p>
                        <Link className="m-1" to="services">
                            <button className="btn btn-lg" style={{ background: "#23CB77" }}>Contact Us</button>
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

export default Banner;