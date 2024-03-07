import React, { useState, useEffect } from 'react';
import { fetchPills } from '../api/pills';
import '../styles/shop.css';
import Cards from './Cards';

const Shop = ({ handleClick }) => {
    const [pills, setPills] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const pillsData = await fetchPills();
            setPills(pillsData);
        };
        fetchData();
    }, []);

    return (
        <section>
            {pills.map((item) => (
                <Cards item={item} key={item._id} handleClick={handleClick} />
            ))}
        </section>
    );
};

export default Shop;