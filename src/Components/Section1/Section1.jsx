import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './section1.scss'
import { AiOutlinePlus } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Section1 = () => {
    const [choose, setChoose] = useState('Range')
    return (
        <div className='Section1 bg-black py-5' >
            <div className="container-lg py-5">
                <Row >
                    <Col xs={12} md={8} className='d-flex d-md-block justify-content-center align-items-center flex-column gap-3 pb-4'>
                        <h6>Tehnical specification</h6>
                        <h1 className={choose === 'Range' && 'active'} onClick={() => setChoose('Range')}>Range</h1>
                        <h1 className={choose === 'Acceleration' && 'active'} onClick={() => setChoose('Acceleration')}>Acceleration</h1>
                        <h1 className={choose === 'Total power' && 'active'} onClick={() => setChoose('Total power')}>Total power</h1>
                        <h1 className={choose === 'Charging' && 'active'} onClick={() => setChoose('Charging')}>Charging</h1>
                        <h1 className={choose === 'Interior' && 'active'} onClick={() => setChoose('Interior')}>Interior</h1>
                    </Col>
                    <Col xs={12} md={4} className='text-center gap-3 d-flex flex-column align-items-center justify-content-center' >
                        {choose === 'Range' && (
                            <>
                                <h3>Total Power Up to 750 hp</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                <h3>Power consumption</h3>
                                <p>
                                    Fermentum posuere urna nec tinc
                                    Gravida in fermentum et sollicitudin
                                    Malesuada fames ac turpis egestas
                                </p>
                                <Link to='/shop'>
                                    <div className="button d-flex justify-content-center align-items-center gap-2">
                                        <div className="icon"><AiOutlinePlus /></div>
                                        view more
                                    </div>
                                </Link>
                            </>
                        )}
                        {choose === 'Acceleration' && (
                            <>
                                <h3>Technology & Automation</h3>
                                <p>Maecenas nec feugiat neque. Morbi vitae dui luctus, faucibus magna et, mollis lorem.</p>
                                <h3>Long-term investments</h3>
                                <p>
                                    Nulla ac enim sed neque
                                    Gravida in fermentum et sollicit
                                </p>
                                <Link to='/shop'>

                                    <div className="button d-flex justify-content-center align-items-center gap-2">
                                        <div className="icon"><AiOutlinePlus /></div>
                                        view more
                                    </div>
                                </Link>
                            </>
                        )}
                        {choose === 'Total power' && (
                            <>
                                <h3>innovative solutions</h3>
                                <p>Nulla a ligula eu nisl blandit porttitor. Nulla vehicula porttitor tellus ut molestie. Duis pharetra.Nulla a ligula eu nisl blandit porttitor. Nulla vehicula porttitor tellus ut molestie. Duis pharetra.</p>
                                <h3>streamline complex ecosystems</h3>
                                <p>
                                    Fermentum posuere urna nec tinc
                                    Fusce dapibus consectetur ante
                                    Proin laoreet at elit sectilit
                                </p>
                                <Link to='/shop'>
                                    <div className="button d-flex justify-content-center align-items-center gap-2">
                                        <div className="icon"><AiOutlinePlus /></div>
                                        view more
                                    </div>
                                </Link>
                            </>
                        )}
                        {choose === 'Charging' && (
                            <>
                                <h3>newest available technologies</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                <h3>Power consumption</h3>
                                <p>
                                    Gravida in fermentum et sollicitudin
                                    Malesuada fames ac turpis egestas
                                </p>
                                <Link to='/shop'>

                                    <div className="button d-flex justify-content-center align-items-center gap-2">
                                        <div className="icon"><AiOutlinePlus /></div>
                                        view more
                                    </div>
                                </Link>
                            </>
                        )}
                        {choose === 'Interior' && (
                            <>
                                <h3>more effective strategy</h3>
                                <p>Donec ultricies, risus in sodales vestibulum, velit lorem varius dolor, ut pulvinar nisl mi nec tortor.</p>
                                <h3>advanced digital state</h3>
                                <p>
                                    Fermentum posuere urna nec tinc
                                    Maecenas fermentum ligula sed
                                    Malesuada fames ac turpis egestas
                                </p>
                                <Link to='/shop'>

                                    <div className="button d-flex justify-content-center align-items-center gap-2">
                                        <div className="icon"><AiOutlinePlus /></div>
                                        view more
                                    </div>
                                </Link>
                            </>
                        )}
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Section1
