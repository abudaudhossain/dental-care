import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';
import "./Doctors.css"

const Dectors = () => {
    return (
        <div className="doctore-bg ">
             <Container  className="py-5">
            <Row>
                <Col>
                    <Doctor></Doctor>
                </Col>
                <Col>
                    <Doctor></Doctor>
                </Col>
                <Col>
                    <Doctor></Doctor>
                </Col>
                <Col>
                    <Doctor></Doctor>
                </Col>
            </Row>
        </Container>
        </div>
       
    );
};

export default Dectors;