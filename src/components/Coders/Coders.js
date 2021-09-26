import React, { useEffect, useState } from 'react';
import Coder from '../Coder/Coder';
import './Coders.css';
import Cart from '../Cart/Cart';

const Coders = () => {
    const [coders, setCoders] = useState([]);
    const [cart, setCart] = useState([]);
    // lode data form public folder as db
    useEffect(() => {
        fetch('./fakedb.JSON')
            .then(res => res.json())
            .then(data => setCoders(data));
    }, []);
    // update cart item
    const handleAddToCart = coder => {
        const newCart = [...cart, coder];
        setCart(newCart);
    }
    return (
        <div className="coders">
            <div className="item">
                {
                    coders.map(coder => <Coder key={coder.id} coder={coder} handleAddToCart={handleAddToCart}></Coder>)
                }
            </div>
            <div>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Coders;