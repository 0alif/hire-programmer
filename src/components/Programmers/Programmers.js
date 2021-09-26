import React from 'react';
import './Programmers.css';

const Programmers = (props) => {
    return (
        <div>
            <p>{props.coder.name}</p>
        </div>
    );
};

export default Programmers;