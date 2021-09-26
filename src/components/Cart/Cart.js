import React from 'react';
import Programmers from '../Programmers/Programmers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';


const element = <FontAwesomeIcon icon={faUsers} />

const Cart = (props) => {
    const { cart } = props;
    // update total cost
    let total = 0;
    for (const coder of cart) {
        total = total + coder.salary;
    }
    return (
        <>
            <div className="cart">
                <h4>Your programmers team</h4>
                <h5>{element} Employee added: {props.cart.length}</h5>
                <h6>Total cost: ${total}</h6>
            </div>
            <div className="selected">
                <h5>Selected programmers:</h5>
                {
                    cart.map(coder => <Programmers key={coder.id} coder={coder}></Programmers>)
                }
            </div>
        </>
    );
};

export default Cart;