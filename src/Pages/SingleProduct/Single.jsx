import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { NavLink, useParams } from 'react-router-dom'
import products from '../../Data/data'
import './single.scss'
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';
import { AiFillCheckCircle } from 'react-icons/ai';
import { AiFillCloseCircle } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/cartReducer'


const Single = () => {
    const { Id } = useParams()
    const choosen = products.find((item) => item.id == Id)
    const [quantity, setQuantity] = useState(1)
    const handleQuantity = (event) => {
        setQuantity(event.target.value)
    }
    const dispatch = useDispatch()
    return (
        <div className='Single'>
            <div className="image">
                <img src="/images/singlep.jpg" alt="" />
            </div>
            <Container className='d-flex gap-3 flex-wrap justify-content-start align-items-center py-5 px-5'>
                <NavLink to='/'>
                    <h6 className='text-muted'>home</h6>
                </NavLink>
                <div className="dot"></div>
                <NavLink to='/shop'>
                    <h6 className='text-muted'>shop</h6>
                </NavLink>
                <div className="dot"></div>
                <h6 className='text-muted'>{choosen.category}</h6>
                <div className="dot"></div>
                <h6 className=''>{choosen.name}</h6>
            </Container>
            <Container className='p-3 pb-5 '>
                <Row>
                    <Col xs={12} md={6}>
                        <div className="img"><img src={choosen.img1} alt="" /></div>
                    </Col>
                    <Col xs={12} md={6} className='p-4 d-flex flex-column gap-3 text-center text-md-start align-items-md-start align-items-center'>
                        <h1>{choosen.name}</h1>
                        <div className="price d-flex gap-3">
                            {choosen.sale !== 0 && (
                                <h2>${choosen.price - (choosen.price * (choosen.sale / 100))}</h2>
                            )}
                            <h2 style={choosen.sale !== 0 ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}>${choosen.price} </h2>
                        </div>
                        <div className="stars">
                            {[...Array(5)].map((_, i) => {
                                return choosen.rating > i ? <AiFillStar /> : <AiOutlineStar />
                            })}
                        </div>
                        <p className='text-muted'>
                            Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus hasellus viverra nulla ut metus varius laort, uisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue urabitur.
                        </p>
                        <div className="isStock " style={choosen.isInStock ? { color: 'green' } : { color: 'red' }}>{choosen.isInStock ? <><AiFillCheckCircle />In Stock </> : <><AiFillCloseCircle />Out Of Stock</>}</div>
                        <h3 className='d-flex flex-wrap justify-content-center align-items-center gap-2'>category : <h2>{choosen.category}</h2></h3>
                        <input type="number" value={quantity} onChange={handleQuantity} min="1" />
                        <h2>Total price is :<h2 style={{ color: 'var(--mcolor)' }}>${quantity * (choosen.price - (choosen.price * (choosen.sale / 100)))}</h2></h2>
                        <div className="button d-flex justify-content-center justify-content-start align-items-center gap-2" onClick={() => dispatch(addToCart({ ...choosen, quantity }))}>
                            <div className="icon"><AiOutlinePlus /></div>
                            Add To Cart
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Single