
import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'


const carousel  = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <div className="d-block w-100">
                    <h5>Slide label</h5>
                    <p className="CarouselP">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
                    </p>

                </div>
            </Carousel.Item>

            <Carousel.Item>
                <div className="d-block w-100">
                    <h5>Slide label</h5>
                    <p className="CarouselP">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
                    </p>
                </div>
            </Carousel.Item>

            <Carousel.Item>

                <div  className="d-block w-100">
                    <h5>Slide label</h5>
                    <p className="CarouselP">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
                    </p>

                </div>
            </Carousel.Item>
        </Carousel>
    );
}

export default carousel;

