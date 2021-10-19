import React from 'react';
import './Value.css'

const Value = ({ title, logo, description }) => {
    return (

        <div className="d-flex p-3">
            <div className="logo">
                <i className={logo}></i>
            </div>
            <div>
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </div>

    );
};

export default Value;