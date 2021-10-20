import React from 'react';
import { Link } from 'react-router-dom';
import "./Doctor.css"

const Doctor = ({ dector }) => {
    const { name,image, motto } = dector;
    return (
        <Link to="services">
            <div className="card-container my-3">
                <div className="card">
                    <div className="imgBx">
                        <img className="img-thumbnail" src={image} alt="" />
                    </div>
                    <div className="contentBx">
                        <h2>{name}</h2>
                        <p>{motto}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Doctor;