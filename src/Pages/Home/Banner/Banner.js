import React from 'react';
import { Carousel } from 'react-bootstrap';

// import images for carousel
import silde1 from "../../../images/banner/slide1.png"
import silde2 from "../../../images/banner/slide2.png"
import silde3 from "../../../images/banner/slide3.png"

const Banner = () => {
    return (
        <div id="home">
            <Carousel>
                <Carousel.Item >
                    <img
                        className="d-block w-100"
                        src={silde1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Healthcare
                            You Can Afford.</h3>
                        <p>Get healthcare for 80% less</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={silde2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Special Care with Great Doctor</h3>
                        <p>Connect with Our Specialist at Your Convenience</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={silde3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Health Care for Any Age</h3>
                        <p>Get the care you need regardless of age and precondtion</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default Banner;