import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import banner from "../../../banner-img.png";
import "./Banner.css"

const Banner = () => {
    return (
        <Container fluid="lg">
            <Row className="h-100 d-flex align-items-center">
                <Col  lg="5" md={6} xs={12}>
                    <h1 className="banner-title"><span className="title">Dental</span> Care</h1>
                   <p>Dental care is the maintenance of healthy teeth and may refer to: Oral hygiene, the practice of keeping the mouth and teeth clean in order to prevent dental disorders</p>
                   <button className="btn btn-lg" style={{background: "#23CB77"}}>Book A Viste</button>
                </Col>
                <Col  lg="7" md={6} xs={12} className="d-flex justify-content-center">
                <Image  style={{height:"80vh"}} src={banner}  fluid />
                </Col>
            </Row>
        </Container>
    );
};

export default Banner;