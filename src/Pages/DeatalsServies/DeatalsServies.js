import React, { useState } from 'react';
import { Card, Container, Spinner, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useFackData from '../../hooks/useFackData';

const DeatalsServies = () => {
    const [book, setBook] = useState(null);
    const { id } = useParams();
    const { useServices } = useFackData();
    const services = useServices();
    const service = services.find(ser => ser.id === parseInt(id));

    if (!service) {
        return <Spinner animation="border" variant="primary" />
    }
    const { name, image, description, motto, fees } = service;

    const handleBooke = () => {
        setBook("Your Booking Success");

    }

    return (
        <div className="p-5">
            {
                book ? 
               <>
                <h1>{book}</h1>
                <Link to ="/home">
                    <Button className="btn" style={{ background: "#23CB77" }}>Back Home</Button>
                </Link>
               </>
                 :
                    <Container className="d-flex justify-content-center m-5">
                        <Card style={{ width: '50%' }}>
                            <Card.Img variant="top" src={image} />
                            <Card.Body>
                                <h6>{motto}</h6>
                                <Card.Title>{name}</Card.Title>
                                <Card.Text>
                                    {description}
                                </Card.Text>
                                <p className="font-weight-bold h5">fees:{fees}</p>
                                <Button onClick={handleBooke} variant="primary">Book Now</Button>
                            </Card.Body>
                        </Card>
                    </Container>
            }


        </div>
    );
};

export default DeatalsServies;