import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useAPI } from '../../Context/apiContext';

const SeeDetails = () => {

    const { serviceId } = useParams();
    const { services } = useAPI();
    const { isLoading } = useAPI();

    const filterData = services.filter(service => service.id === serviceId)

    console.log(filterData);


    return (
        <div>

            {

                !isLoading ?


                    <div className="d-flex justify-content-center mt-5">
                        <div class="card" style={{ width: '18rem' }}>
                            <img src={filterData[0].img} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">{filterData[0].title}</h5>
                                <p class="card-text">{filterData[0].detail}</p>
                                <button href="#" class="btn btn-primary">Enroll to this Plan</button>
                            </div>
                        </div>

                    </div>

                    :
                    // Adding spinner while data loading
                    <div class="d-flex justify-content-center my-5">
                        <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>

            }





        </div>
    );
};

export default SeeDetails;


{/* <h1>{filterData[0].title}</h1> */ }