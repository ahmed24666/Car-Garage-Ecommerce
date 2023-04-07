import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Pagination from 'react-bootstrap/Pagination';
import { Link, NavLink } from 'react-router-dom'
import './shop.scss'
import products from './../../Data/data'
const Shop = () => {
    // pagination 
    const [currentPage, setCurrentPage] = useState(1)
    const postsPerPage=6
    const lastPostIndex = currentPage * postsPerPage
    const firstPostIndex = lastPostIndex - postsPerPage
    // range
    const min = products.reduce(function (prev, curr) {
        return prev.price < curr.price ? prev : curr;
    });
    const max = products.reduce(function (prev, curr) {
        return prev.price > curr.price ? prev : curr;
    });
    const [value, setValue] = useState(max.price)
    // filterPrice
    const priceRangeProducts=products.filter((item)=>item.price<=value)
    // filtercat
    const [category, setCategory] = useState('All')
    const [filteredCat, setFilteredCat] = useState(priceRangeProducts)
    const filtered=priceRangeProducts.filter((item)=>item.category===category)
    // filtercat
    useEffect(() => {
        if (category==='All') {
            setFilteredCat(priceRangeProducts)
            return;
        }
        setFilteredCat(filtered)
    }, [category,priceRangeProducts,filteredCat,filtered])
    const currentPosts = filteredCat.slice(firstPostIndex, lastPostIndex)
    let pages = []
    for (let i = 1; i <= Math.ceil(filteredCat.length / postsPerPage); i++) {
        pages.push(i)
    }
    return (
        <div className='Shop'>
            <div className="image">
                <img src="/images/shop.jpg" alt="" />
            </div>
            <Container className='d-flex gap-3 justify-content-start align-items-center py-5 px-5'>
                <NavLink to='/'>
                    <h6 className='text-muted'>home</h6>
                </NavLink>
                <div className="dot"></div>
                <NavLink to='/shop'>
                    <h6 className='text-muted'>shop</h6>
                </NavLink>
            </Container>
            <Container className=''>
                <div className="productHead pb-5 px-4 text-center">
                    <h5 className='h6'>Showing {filteredCat.length<postsPerPage?filteredCat.length:postsPerPage} products of {filteredCat.length} filtered products .</h5>
                </div>
            </Container>
            <Container className='d-flex flex-column flex-md-row p-2 p-md-5 '>
                <div className="filter d-flex flex-column gap-3 align-items-center align-items-md-start text-center text-md-start">
                    <div className="price">
                        <h4>Price</h4>
                        <input type="range" min={min.price} max={max.price} onChange={(e) => setValue(e.target.value)} />
                        <div className="range">Price : LE {min.price} -- LE {value}</div>
                    </div>
                    <h4>categories</h4>
                    <div className="cat d-flex flex-md-column gap-3 flex-wrap mb-5 p-3 p-md-0">
                        {['All','Cars','Electronical','Gadgets','Drive','Mechanic','Automotive','Service'].map((item)=>{
                            return(
                                <h6 onClick={()=>setCategory(item)}>{item}</h6>
                            )
                        })}
                        
                    </div>
                </div>
                <div className="ShopContainer w-100">
                    <div class="grid-container">
                        {currentPosts.map((item) => {
                            return (
                                <Link to={`/singleproduct/${item.id}`}>
                                    <div className="oneCard">
                                        <div className="img">
                                            <img src={item.img1} alt="" />
                                            <h6><div className="dot"></div>{item.category}</h6>
                                            <h4>{item.name}</h4>
                                            <div className="price d-flex gap-3">
                                                {item.sale !== 0 && (
                                                    <span>${item.price - (item.price * (item.sale / 100))}</span>
                                                )}
                                                <span style={item.sale !== 0 ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}>${item.price} </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                    <div className="pagination d-flex justify-content-center py-4">
                        {pages.map((page, index) => {
                            return <button className={page === currentPage ? 'paginate curr' : 'paginate'} onClick={() => setCurrentPage(page)}>{page}</button>
                        })}
                    </div>
                </div>
            </Container>

        </div>
    )
}

export default Shop
