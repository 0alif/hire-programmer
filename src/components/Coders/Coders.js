import React, { useEffect, useState } from 'react';
import Coder from '../Coder/Coder';
import './Coders.css';
import Cart from '../Cart/Cart';

const Coders = () => {
    const [coders, setCoders] = useState([]);
    useEffect(() => {
        fetch('./fakedb.JSON')
            .then(res => res.json())
            .then(data => setCoders(data));
    }, []);
    return (
        <div className="coders">
            <div>
                {
                    coders.map(coder => <Coder key={coder.id} coder={coder}></Coder>)
                }
            </div>
            <div>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Coders;