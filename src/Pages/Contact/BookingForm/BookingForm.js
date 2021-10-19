import React, { useState } from 'react';
import { Col, Form, Row, Container } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const BookingForm = () => {
    const { user } = useAuth();
    const [book, setBook] = useState(null)
    const handelBooking = () => {
        setBook("You bookign is seccess")
    }
    return (
        <div className="my-5">
            <h1 className="text-center">Request Consultation Online</h1>
            {
                book ? <h1>{book}</h1> :
                    <Container>
                        <Form>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder={user.displayName} />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder={user.email} />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>Choose Clinic</Form.Label>
                                    <Form.Select defaultValue="Choose...">
                                        <option>Choose...</option>
                                        <option>Odontika Dental Clinic</option>
                                        <option>Sylhet Dental Care & Implant Center</option>
                                        <option>Dr Rizwan's ICONIC DENTAL Laser and Implant Center</option>
                                        <option>Khan dental clinic</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>Choose Service</Form.Label>
                                    <Form.Select defaultValue="Choose...">
                                        <option>Choose...</option>
                                        <option>DENTAL SERVICES</option>
                                        <option>IMPLANTS</option>
                                        <option>DENTISTRY</option>
                                        <option>DENTAL BRIDGES</option>
                                        <option>CROWNS</option>
                                        <option>INVISALIGN</option>
                                        <option>Odontika Dental Clinic</option>
                                    </Form.Select>
                                </Form.Group>

                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Check in date</Form.Label>
                                    <Form.Control type="date" placeholder="Enter your name" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>Choose Doctor</Form.Label>
                                    <Form.Select defaultValue="Choose...">
                                        <option>Choose...</option>
                                        <option>Arianna McDonald</option>
                                        <option>Hellen Hill</option>
                                        <option>Emma Beckett</option>
                                        <option>Audrey Button</option>
                                    </Form.Select>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your address" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control type="number" placeholder="Enter your phone number" />
                                </Form.Group>

                            </Row>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Example textarea</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Form.Group className="mb-3" id="formGridCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>

                            <button onClick={handelBooking} className="btn btn-lg" style={{ background: "#23CB77" }}>BOOK A VISIT</button>
                        </Form>
                    </Container>
            }
        </div>
    );
};

export default BookingForm;