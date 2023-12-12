import React, { useContext, useState } from 'react'
import cart from '../assets/image/cart.svg'
import avatar from '../assets/image/avatar.png'
import product1 from '../assets/image/product1.jpg'
import product2 from '../assets/image/product2.jpg'
import product3 from '../assets/image/product3.jpg'
import product4 from '../assets/image/product4.jpg'
import product12 from '../assets/image/product12.jpg'
import image2 from '../assets/image/image2.jpg'
import image3 from '../assets/image/image3.jpg'
import image4 from '../assets/image/image4.jpg'
import { AiOutlineMinusSquare, AiOutlineShoppingCart, AiOutlineMinus } from 'react-icons/ai'
import { CiSquarePlus } from 'react-icons/ci'
import { GrFormNext, GrFormPrevious, GrAdd } from 'react-icons/gr'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import FooterA from './FooterA'


const Commerce = () => {
    // const {num, setnum} = useContext(AppContext)
    const Navigate = useNavigate()
    const [current, setCurrent] = useState(0)
    const [cartItem, setCartItem] = useState("")
    const [real, setReal] = useState("")


    // let price = 50000
    let dispatch = useDispatch()
    let myCounter = useSelector((state) => state.counterReducer.count)
    // console.log(myCounter) 

    let price = useSelector((state) => state.counterReducer.price)


    let product = []
    const productCart = () => {
        alert("product added sucessfully")

        let carty = {
            productName: 'Sneaker',
            brand: 'SNEAKER COMPANY',
            productTitle: 'Fall Limited Edition Sneakers',
            price: 50000,
            quantity: 1,
            image3: product1,
        }

        product.push(carty)
        // console.log(product);
        localStorage.setItem("cart", JSON.stringify(product))
        setCartItem(product[0].quantity)
        // setCartItem(carty.quantity)
        setReal(product)
        // console.log(cartItem);
    }

    const productCount = () => {
        if (cart) {
            Navigate('/getitem')
        } else {
            Navigate('/')
        }
    }

    const images = [
        product1, product2, product3, product4
    ]


    let length = images.length
    const handleNext = () => {
        const newCurrent = current + 1
        setCurrent(newCurrent >= length ? 0 : newCurrent)
        console.log(current);
    }
    const handlePrevious = () => {
        const newCurrent = current - 1
        setCurrent(newCurrent < 0 ? length - 1 : newCurrent)
        console.log(current);
    }


    return (
        <>
            <nav className="navbar navbar-expand-lg" id='nav'>
                <div className="container">
                    <a className="navbar-brand fw-bold text-light" href="#">Sneakers</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active text-light" aria-current="page" href="#">Collection</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">Men</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">Women</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div id='cart'>
                    <span id='cartItem'>{cartItem} </span> <img onClick={productCount} real={real} id='productCount' src={cart} alt="" /> <span id='cartItem'></span>
                    <img className='ms-4' src={avatar} alt="" width={30} />
                </div>
            </nav>

            <div className="container">
                <div className="row">
                    <div className="col-lg-5 my-5">
                        <img id='image' className='rounded' src={images[current]} alt="productImage" />
                        <GrFormNext id='next' onClick={handleNext} />
                        <GrFormPrevious id='previous' onClick={handlePrevious} />
                        <div id='pro' className='row'>
                            <div id='img' className='col-lg-2 mt-4'><img src={product12} alt="" width={60} /></div>
                            <div id='img' className='col-lg-2 mt-4'><img src={image2} alt="" width={60} /></div>
                            <div id='img' className='col-lg-2 mt-4'><img src={image3} alt="" width={60} /></div>
                            <div id='img' className='col-lg-2 mt-4'><img src={image4} alt="" width={60} /></div>
                        </div>
                    </div>
                    <div id='comp' className="col-lg-7">
                        <h3 className='mt-5 fw-bold'>SNEAKER COMPANY</h3>
                        <h2 id='fall'>Fall Limited Edition Sneakers</h2>
                        <p className='mt-5'>The low profile sneakers are your perfect casual wear <br /> companion. Featuring a durable rubbber outer sole, they'll <br /> withstand everything the weather can offer.</p>
                        <span id='per'>50,000</span> <span id='cent'>20%</span>
                        <h5 className='text-decoration-line-through'>#60,000</h5>
                    </div>
                </div>
            </div>
            <div id='con' className="container">
                <div className='row'>
                    <div className="col-lg-5"></div>
                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-lg">
                            </div>
                            <div className="col-lg-10">
                                <div id='button' className='rounded w-100'>
                                    <div className='mx-auto text-center'>
                                        <AiOutlineShoppingCart /><button onClick={productCart} className='btn fw-bold'>ADD TO CART</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FooterA />
        </>
    )
}

export default Commerce