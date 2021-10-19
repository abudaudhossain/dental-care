import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Value from '../Value/Value';
import "./Values.css"

const Values = () => {
    return (
        <Container className="pb-5">
            <div className="py-5">
                <h4>What we stand for</h4>
                <span style={{ width: "100px", background: "#23CB77", height: "2px", margin: "5px", display: "block" }}></span>
                <h1>OUR <span className="title">VALUES</span></h1>
            </div>
            <Row>
                <Col lg={4} md={6} sm={12}>
                    <Value logo="fas fa-user-md" title="DOCTOR YOU CHOOSE" description="Donec porta tellus ac purus eleifend faucibus sit amet eu eros. Donec cursus laoreet felis blandit facilisis."></Value>
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <Value logo="fas fa-heartbeat" title="YOUR HEALTHCARE" description="Vestibulum imperdiet vestibulum laoreet. Integer elementum euismod ante sit amet elementum."></Value>
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <Value logo="fas fa-phone" title="ALWAYS THERE FOR YOU" description="Mauris commodo lacinia nisi a fermentum. Donec risus magna, fringilla laoreet ullamcorper in."></Value>
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <Value logo="fas fa-user-nurse" title="NURSING STAFF" description="Donec libero dui, dapibus non leo et, molestie faucibus risus. In fermentum tortor et."></Value>
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <Value logo="fas fa-ambulance" title="EMERGENCY SERVICES" description="Pellentesque sagittis neque neque, ac ultrices neque tempor a. In . tellus sollicitudin eu."></Value>
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <Value logo="fas fa-hospital" title="PREMIUM FACILITIES" description="Donec porta tellus ac purus eleifend faucibus sit amet eu eros. Donec cursus laoreet felis."></Value>
                </Col>

            </Row>
        </Container>
    );
};

export default Values;