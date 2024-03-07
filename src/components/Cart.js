import React, { useState, useEffect } from 'react';
import "../styles/cart.css";

const Cart = ({ cart, setCart, handleChange }) => {
    const [price, setPrice] = useState(0);

    const handlePrice = () => {
        let ans = 0;
        cart.forEach((item) => {
            ans += item.price * (item.amount || 1);
        });
        setPrice(ans);
    };

    const handleRemove = (id) => {
        const arr = cart.filter((item) => item._id !== id);
        setCart(arr);
        handlePrice();
    };

    useEffect(() => {
        handlePrice();
    }, [cart]);

    return (
        <article>
            {cart?.map((item) => (
                <div className="cart_box" key={item._id}>
                    <div className="cart_img">
                        <img src={item.imageUrl} alt={item.name} />
                        <div className="item_details">
                            <p>{item.name}</p>
                            <div className="price_box">
                                <span>{item.price}$</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button onClick={() => handleChange(item, +1)}> + </button>
                        <button>{item.amount || 1}</button>
                        <button onClick={() => handleChange(item, -1)}> - </button>
                    </div>
                    <div>
                        <button onClick={() => handleRemove(item._id)}>Remove</button>
                    </div>
                </div>
            ))}
            <div className='total'>
                <span>Total Price of your Cart</span>
                <span>$ - {price}</span>
            </div>
        </article>
    );
};

export default Cart;