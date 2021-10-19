import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {

    const { id, title, description, img } = props.service;
    return (
        <div>
            <Col>
                <Card className="h-100">
                    <Card.Img variant="top" src={img} thumbnail />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Link to={`/services/${id}`}><Button variant="warning" className="font-monospace">See Details</Button></Link>
                    </Card.Footer>
                </Card>
            </Col>

        </div>
    );
};

export default Service;