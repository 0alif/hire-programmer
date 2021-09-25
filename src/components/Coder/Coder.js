import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Coder.css';

const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
const Coder = (props) => {
    const { name, language, age, country, salary, img } = props.coder;
    return (
        <div className="row row-cols-3 g-4">
            <div className="col">
                <div className="card h-100">
                    <img src={img} alt="" />
                    <div className="card-body">
                        <h5 className="card-title">Name: {name}</h5>
                        <h6>Language: {language}</h6>
                        <p>Age: {age}</p>
                        <p>Country: {country}</p>
                        <p>Salary: {salary}</p>
                        <button className="btn btn-secondary">{cartIcon} Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coder;