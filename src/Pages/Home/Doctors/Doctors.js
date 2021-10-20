import React from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import useFackData from '../../../hooks/useFackData';
import Doctor from '../Doctor/Doctor';
import "./Doctors.css"

const Dectors = () => {
    const { useDoctors } = useFackData()
    const doctors = useDoctors();

    return (
        <div className="doctore-bg ">
            <Container className="py-5">
                <Row>
                    {
                        doctors ? 
                        doctors.map(dector => <Col lg={3} md={6} sm={6} key={dector.id}
                            >
                                <Doctor dector = {dector}></Doctor>
                            </Col> )
                        :
                            <Spinner animation="border" variant="primary" />
                    }
                </Row>
            </Container>
        </div>

    );
};

export default Dectors;