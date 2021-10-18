import React from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import useFackData from '../../../hooks/useFackData';
import Service from '../Service/Service';

const Services = () => {

    const { useServices } = useFackData();
    const services = useServices();
    console.log(services);
    return (
        <>
            <div className="text-center my-5">
                <h3 >The best reference</h3>
                <span style={{ width: "100px", background: "#23CB77", height: "2px", margin: "5px auto", display: "block" }}></span>
                <h1 style={{ fontSize: "48px" }}>OUR <span className="title">SERVICES</span></h1>
                <p className="w-50 m-auto"> Quisque posuere rhoncus erat, sit amet aliquet augue. Donec eros massa, gravida ac lectus et, pharetra interdum lectus.</p>
            </div>
            <Container className="pb-5">
                <Row >
                    {
                        services ?
                            services.map(service => <Col key={service.id}
                             lg={3} md={6} sm={12}>
                                <Service service={service}></Service>
                                </Col>)
                            : <Spinner animation="border" variant="primary" />
                    }

                </Row>
            </Container>
        </>
    );
};

export default Services;