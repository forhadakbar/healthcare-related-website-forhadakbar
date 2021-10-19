import React from 'react';
import { Row } from 'react-bootstrap';
import { useAPI } from '../../Context/apiContext';
import Plan from '../Plan/Plan';

const Pricing = () => {
    const { fakeData } = useAPI();
    return (
        <div className="p-3">

            <h1 className="text-center py-4 fw-bold">Our Plans</h1>
            <p className="text-center pb-3">We provide wide range of plans for our customer. Please choose the plan best for you</p>

            <Row xs={1} md={3} className="g-4">

                {
                    fakeData.map(plan => <Plan
                        key={plan.id}
                        plan={plan}
                    ></Plan>)
                }

            </Row>

        </div>
    );
};

export default Pricing;