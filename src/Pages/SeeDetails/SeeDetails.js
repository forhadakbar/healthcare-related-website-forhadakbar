import React from 'react';
import { useParams } from 'react-router';
import { useAPI } from '../../Context/apiContext';

const SeeDetails = () => {

    const { serviceId } = useParams();
    const { fakeData } = useAPI();
    const { isLoadingData } = useAPI();

    const filterData = fakeData.filter(service => service.id === serviceId)


    return (
        <div>

            {

                !isLoadingData ?


                    <div className="d-flex justify-content-center mt-5">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src={filterData[0].img} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{filterData[0].title}</h5>
                                <p className="card-text">{filterData[0].detail}</p>
                                <p className="fw-bold">Cost: ${filterData[0].cost}/ month</p>
                                <a href="/home" className="btn btn-primary">Enroll to this Plan</a>
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