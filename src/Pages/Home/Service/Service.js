import React from 'react';
import { Card , Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {name, id, image, description, motto} = service;
    return (
        <div className='card-container'>
            <Card className="my-3" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <h6>{motto}</h6>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description.slice(0, 50)}
                </Card.Text>
                <Link to={`/service/${id}`}><Button variant="primary">Book Now</Button></Link>
            </Card.Body>
        </Card>
        </div>
    );
};

export default Service;