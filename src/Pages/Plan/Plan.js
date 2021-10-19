import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Plan = (props) => {
    const { title, icon, plan, doc_visit, plan_details, cost } = props.plan;
    return (
        <div>
            <Col>
                <Card className="h-100">
                    <Card.Img variant="top" src={icon} className="w-50" />
                    <Card.Body>
                        <Card.Title>{title} ${cost}/ Month</Card.Title>
                        <Card.Text>
                            <p> Plan Name: {plan} deductible</p>
                            <p> Plan Details: {plan_details} </p>
                            <p> Doctor Visit: ${doc_visit}</p>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Link to={"/home"}><Button variant="info" className="font-monospace">Enroll</Button></Link>
                    </Card.Footer>
                </Card>
            </Col>

        </div>
    );
};

export default Plan;