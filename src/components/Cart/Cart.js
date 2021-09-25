import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';

const element = <FontAwesomeIcon icon={faUsers} />
const Cart = () => {
    return (
        <div>
            <h5>{element} Employee added: 0</h5>
            <h6>Total cost: 0</h6>
        </div>
    );
};

export default Cart;