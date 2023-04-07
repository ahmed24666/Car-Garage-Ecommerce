import './progress.scss'
import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiOutlinePlus } from 'react-icons/ai';
import Container from 'react-bootstrap/Container';

const Progress = () => {
    return (
        <div className='Progress'>
            <Container fluid>
                <Row>
                    <Col xs={12} md={6} className='px-0 py-4 m-auto d-flex gap-5 align-items-center flex-column justify-content-center'>
                        <div className="item gap-2 d-flex flex-column">
                            <div className="text d-flex justify-content-between">
                                <span>New concept / design</span>
                                <span>2021</span>
                            </div>
                            <div className="prog">
                                <span style={{width:'80%'}} data-width='80%'></span>
                            </div>
                        </div>
                        <div className="item gap-2 d-flex flex-column">
                            <div className="text d-flex justify-content-between">
                                <span>New concept / service</span>
                                <span>2021</span>
                            </div>
                            <div className="prog">
                                <span style={{width:'60%'}} data-width='60%'></span>
                            </div>
                        </div>
                        <div className="item gap-2 d-flex flex-column">
                            <div className="text d-flex justify-content-between">
                                <span>New concept / repair</span>
                                <span>2021</span>
                            </div>
                            <div className="prog">
                                <span style={{width:'95%'}} data-width='95%'></span>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className='p-0'>
                        <div className="image">
                            <img src="/images/progress1.jpg" alt="" />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} className='p-0'>
                        <div className="image">
                            <img src="/images/progress2.jpg" alt="" />
                        </div>
                    </Col>
                    <Col xs={12} md={6} className='p-0 m-auto d-flex flex-column text-center align-items-center justify-content-center'>
                        <h1 className='pt-3'>3.8 sec</h1>
                        <h2> THE FASTEST ELECTRIC CAR IN THE WORLD </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do amet eiusmod tilti.</p>
                    </Col>
                </Row>
                
            </Container>
        </div>
    )
}

export default Progress
