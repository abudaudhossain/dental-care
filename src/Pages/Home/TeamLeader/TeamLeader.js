import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

const TeamLeader = () => {
    return (
        <Container  className="my-5">
            <Row className="d-flex align-items-center justify-content-center">
                <Col lg={4} className="d-flex justify-content-center mb-5">
                    <Image className="banner-img" style={{ height: "80vh" }} src="https://i.ibb.co/t3DFdcv/doktorka.png" fluid />
                </Col>
                <Col lg={8} className="my-text">
                    <h3>Dr Jenna Wilson</h3>
                    <h1 className="title my-3">Our Dental Team</h1>
                    <p>Dr. Jenna Wilson is is dedicated to providing her patients with the most beautiful smile together with the best dental protection available nowadays. Dr Jenna non malesuada erat, id consequat nunc. Nulla fermentum ipsum eget tortor laoreet varius.</p>
                    <img src="https://i.ibb.co/hVxxg8Y/sign.png" alt="img" />
                </Col>
            </Row>
        </Container>
    );
};

export default TeamLeader;