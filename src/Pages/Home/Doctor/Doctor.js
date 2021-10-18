import React from 'react';
import "./Doctor.css"

const Doctor = ({dector}) => {
    const {name, id, image, motto} = dector;
    return (
        <div className="card-container">
            <div className="card">
                <div className="imgBx">
                    <img className="img-thumbnail" src={image} alt=""/>
                </div>
                <div className="contentBx">
                    <h2>{name}</h2>
                    <p>{motto}{ id}</p>
                </div>
            </div>
        </div>
    );
};

export default Doctor;