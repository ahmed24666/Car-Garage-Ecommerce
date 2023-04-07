import './motorSport.scss'
import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
const MotorSport = () => {
    return (
        <div className='MotorSport py-5'>
            <Container>
                <Row className='py-5'>
                    <Col xs={12} lg={3}>
                        <Row>
                            <Col>
                                <h1 className='text-center py-5'>
                                    Motorsport as a passion
                                </h1>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} lg={3}>
                        <Row>
                            <Col className='py-3'>
                                <div className="textHead ">
                                    <div className="dot"></div>
                                    <h2> Pure sportiness </h2>
                                </div>
                                <p>Eget magna fermentum iaculis diam phasellus vestibulum lorem eget mauris pharetra et.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='py-3'>
                                <div className="textHead ">
                                    <div className="dot"></div>
                                    <h2> Driver-oriented </h2>
                                </div>
                                <p>Eget magna fermentum iaculis diam phasellus vestibulum lorem eget mauris pharetra et.</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} lg={3}>
                        <Row>
                            <Col className='py-3'>
                                <div className="textHead ">
                                    <div className="dot"></div>
                                    <h2> All-round star </h2>
                                </div>
                                <p>Eget magna fermentum iaculis diam phasellus vestibulum lorem eget mauris pharetra et.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='py-3'>
                                <div className="textHead ">
                                    <div className="dot"></div>
                                    <h2>Aerodynamic</h2>
                                </div>
                                <p>Eget magna fermentum iaculis diam phasellus vestibulum lorem eget mauris pharetra et.</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} lg={3}>
                        <Row>
                            <Col className='py-3'>
                                <div className="textHead ">
                                    <div className="dot"></div>
                                    <h2> Instant power </h2>
                                </div>
                                <p>Eget magna fermentum iaculis diam phasellus vestibulum lorem eget mauris pharetra et.</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default MotorSport
