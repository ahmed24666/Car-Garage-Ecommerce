import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './cart.scss'
import { AiOutlineClose } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, resetCart } from '../../redux/cartReducer';

const Cart = () => {
    const products = useSelector(state => state.cart.products)
    const totalPrice = () => {
        let total = 0
        products.forEach(item => {
            total += item.quantity * (item.price - (item.price * (item.sale / 100)))
        });
        return total.toFixed(2)
    }
    const dispatch = useDispatch()
    return (
        <div className='Cart'>
            <div className="image">
                <img src="/images/cart.jpg" alt="" />
            </div>
            <Container className='pb-5 px-3'>
                <Row style={{ borderBottom: '1px solid #9a9a9a' }} className='py-5'>
                    <Col xs={4} md={5} className='d-flex justify-content-center align-items-center'>
                        <h6>Product</h6>
                    </Col>
                    <Col className='d-none d-sm-flex justify-content-center align-items-center'><h6>Price</h6></Col>
                    <Col className='d-flex justify-content-center align-items-center'><h6>Quantity</h6></Col>
                    <Col className='d-flex justify-content-center align-items-center'><h6>Subtotal</h6></Col>
                </Row>
                {products.map((item) => {
                    return (
                        <Row key={item.id} style={{ borderBottom: '1px solid #9a9a9a' }} className='py-4'>
                            <Col xs={4} md={5} className='d-flex justify-content-start align-items-center gap-3 flex-md-row flex-column'>
                                <div className="icon" onClick={() => dispatch(removeItem(item.id))}>
                                    <AiOutlineClose />
                                </div>
                                <div className="img">
                                    <img src={item.img1} alt="" />
                                </div>
                                <div className="name text-center">
                                    <h6>{item.name}</h6>
                                </div>
                            </Col>
                            <Col className='d-none d-sm-flex justify-content-center align-items-center'>
                                <h6>${item.price - (item.price * (item.sale / 100))}</h6>
                            </Col>
                            <Col className='d-flex justify-content-center align-items-center'>{item.quantity}</Col>
                            <Col className='d-flex justify-content-center align-items-center'>${item.quantity * (item.price - (item.price * (item.sale / 100)))}</Col>
                        </Row>
                    )
                })}
                <Row className='py-4'>
                    <Col className=' d-flex justify-content-center align-items-center gap-4'>
                        {products.length === 0 ?
                            <>
                                <h2>cart is</h2>
                                <h2 style={{ color: 'var(--mcolor' }}>empty</h2>
                            </>
                            :
                            <div className='flex-column align-items-center text-center d-flex gap-3'>
                                <div className="button d-flex justify-content-center justify-content-start align-items-center gap-2" onClick={()=>dispatch(resetCart())}>
                                    <div className="i"><AiOutlineClose/></div>
                                    Clear Cart
                                </div>
                                <h2>Total Price Is :</h2>
                                <h2 style={{ color: 'var(--mcolor' }}>${totalPrice()}</h2>
                            </div>
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Cart
