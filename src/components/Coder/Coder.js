import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Coder.css';

const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />

const Coder = (props) => {
    const { name, language, age, country, salary, img } = props.coder;
    return (
        <div className="coder">
            <img src={img} alt="Human img" />
            <div className="card-body">
                <h5 className="card-title">Name: {name}</h5>
                <h6>Language: {language}</h6>
                <p>Age: {age}</p>
                <p>Country: {country}</p>
                <p>Salary: {salary}</p>
                <button
                    onClick={() => props.handleAddToCart(props.coder)} className="btn add-to-cart">{cartIcon} Add to cart</button>
            </div>
        </div>
    );
};

export default Coder;