import React from 'react';
import '../styles/cards.css';

const Cards = ({ item, handleClick }) => {
    const { name, price, imageUrl } = item;
    return (
        <div className="cards">
            <div className="image_box">
                <img src={imageUrl} alt={name}/>
            </div>
            <div className="details">
                <p>{name}</p>
                <p>Price - {price}$</p>
                <button onClick={() => handleClick(item)}>Add to Cart</button>
            </div>
        </div>
    );
};

export default Cards;