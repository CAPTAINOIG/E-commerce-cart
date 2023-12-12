
import { MdDelete, MdTextIncrease } from 'react-icons/md'
import { AiOutlineMinus } from 'react-icons/ai'
import { GrAdd } from 'react-icons/gr'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../Redux/counterSlice';
import Footer from './Footer';
import Navbar from './Navar';



const Getitem = () => {
    const [item, setItem] = useState([])
    let newProduct = JSON.parse(localStorage.getItem("cart"))
    // console.log(newProduct);

    // let price = 50000
    const myCounter = useSelector((state) => state.counterReducer.count)
    let dispatch = useDispatch()
    // console.log(myCounter);


    let price = useSelector((state) => state.counterReducer.price)

    let newPrice = myCounter * price
    localStorage.setItem('luckyCart', JSON.stringify(newPrice))
    // console.log(newPrice);
    const deleteItem = (index) => {
        let rem = [...newProduct];
        rem.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(rem)); // Update local storage
        setItem(rem); // Update state
    };
    

    return (
        <>
           <Navbar/>
            <section className='sectionA' border>
                
                    {newProduct.length > 0 ? 
                        newProduct.map((item, index) => (
                            <div key={index} className="col-sm-6 mb-3 mb-sm-0">

                                <div id='card' className='card'>
                                    <div className='row'>

                                        <div className='col-lg-3'>
                                            <img id='imager' className=' rounded-3 mt-3' src={item.image3} alt="" width={150} height={100} />

                                        </div>
                                        <div className='d-flex col-lg-8 ms-5 mt-3'>
                                            <div id='produc'>
                                                <p>{item.productTitle}</p>
                                                <p>{item.brand}</p>
                                                <p>{item.productName}</p>
                                            </div>
                                            <div className='price'>

                                                <p>#{item.price}</p>
                                            </div>
                                        </div>

                                    </div>

                                    <div className='d-flex'>
                                        <div>
                                            <button onClick={() => deleteItem(index)} className='my-3' id='delete'><MdDelete />   REMOVE</button>
                                        </div>
                                        <div>
                                            <div className='plusminus my-3'>
                                                <span className='minus rounded cursor-pointer'>
                                                    <AiOutlineMinus className='rounded' id='decrease' size={29} onClick={() => dispatch(decrement())} />
                                                </span>
                                                {myCounter}
                                                <span className='add rounded'>
                                                    <GrAdd id='increase' className='rounded' size={29} onClick={() => dispatch(increment())} />
                                                </span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className='zero rounded border fs-5'>
                                    <p className='subCart1'>CART SUMMARY</p>
                                    <span className='subCart'>Sub Total</span>
                                    <span className='pay'>#{newPrice}</span>
                                    <div className='checkout rounded'>
                                        <Link className='pay text-decoration-none fs-5' to="/paystack"><span  className='fs-5'>CHECKOUT</span>#{newPrice}</Link>
                                        
                                    </div>
                                </div>
                            </div>

                        ))
                        : <p className='text-center fs-2'>You have no product added in your cart</p>
                }

                </section>
                <Footer/>
        </>
    )
}

export default Getitem