import React from 'react'
import './mainSlider.scss'
import Carousel from 'react-bootstrap/Carousel';
import { AiOutlinePlus } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const MainSlider = () => {
    return (
        <div className='MainSlider'>
            <Carousel fade touch={true} wrap={true}>
                <Carousel.Item interval={3000}>
                    <img className="image d-block w-100"
                        src="/images/slider4.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>the future</h1>
                        <Link to='/shop'>
                            <div className="button d-flex justify-content-center align-items-center gap-2">
                                <div className="icon"><AiOutlinePlus /></div>
                                view more
                            </div>
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="image d-block w-100"
                        src="/images/slider2.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h1>top rated</h1>
                        <Link to='/shop'>
                            <div className="button d-flex justify-content-center align-items-center gap-2">
                                <div className="icon"><AiOutlinePlus /></div>
                                view more
                            </div>
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="image d-block w-100"
                        src="/images/slider3.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h1>city drive</h1>
                        <Link to='/shop'>
                            <div className="button d-flex justify-content-center align-items-center gap-2">
                                <div className="icon"><AiOutlinePlus /></div>
                                view more
                            </div>
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="image d-block w-100"
                        src="/images/slider1.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h1>fast ride</h1>
                        <Link to='/shop'>
                            <div className="button d-flex justify-content-center align-items-center gap-2">
                                <div className="icon"><AiOutlinePlus /></div>
                                view more
                            </div>
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default MainSlider
