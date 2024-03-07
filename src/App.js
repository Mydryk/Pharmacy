import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import Cart from './components/Cart';
import './styles/shop.css';

const App = () => {
    const [show, setShow] = useState(true);
    const [cart, setCart] = useState([]);
    const [warning, setWarning] = useState(false);

    const handleClick = (item) => {
        let isPresent = false;
        cart.forEach((product) => {
            if (item._id === product._id)
                isPresent = true;
        });
        if (isPresent) {
            setWarning(true);
            setTimeout(() => {
                setWarning(false);
            }, 2000);
            return;
        }
        setCart([...cart, { ...item, amount: 1 }]); 
    };

    const handleChange = (item, d) => {
        const updatedCart = cart.map((product) => {
            if (product._id === item._id) {
                let updatedAmount = product.amount || 1;
                updatedAmount += d;
                if (updatedAmount < 1) {
                    updatedAmount = 1;
                }
                return { ...product, amount: updatedAmount };
            }
            return product;
        });
        setCart(updatedCart);
    };

    return (
        <React.Fragment>
            <Navbar size={cart.length} setShow={setShow} />
            {show ? (
                <Shop handleClick={handleClick} />
            ) : (
                <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
            )}
            {warning && <div className='warning'>Item is already added to your cart</div>}
        </React.Fragment>
    );
};

export default App;