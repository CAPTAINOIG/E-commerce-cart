import React from 'react'
import avatar from '../assets/image/avatar.png'
import cart from '../assets/image/cart.svg'



const Navbar = ({myCounter}) => {
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

            <span id='cartItem'>{myCounter}</span> <img id='productCount' src={cart} alt="" /> <span id='cartItem'></span>
            <img className='ms-4' src={avatar} alt="" width={30} />

        </div>
    </div>
</nav>
    </>
  )
}

export default Navbar