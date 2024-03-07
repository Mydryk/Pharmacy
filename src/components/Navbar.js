// Navbar.js
import React from 'react';
import "../styles/navbar.css"

const Navbar = ({ setShow, size }) => {
    return (
        <nav>
            <div className="nav_box">
                <span className="logo" onClick={() => setShow(true)}>
                    <img src="https://seeklogo.com/images/P/pharmacy-logo-7092A6C9DF-seeklogo.com.png" alt="Pharmacy Logo"/>
                    Pharmasy
                </span>
                <div className="cart" onClick={() => setShow(false)}>
                    <span>
                        <i className="fas fa-cart-plus"></i>
                    </span>
                    <span>{size}</span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
