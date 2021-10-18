import React from 'react';
import "./Doctor.css"

const Doctor = () => {
    return (
        <div className="card-container">
            <div className="card">
                <div className="imgBx">
                    <img className="img-thumbnail" src="https://i.ibb.co/t3DFdcv/doktorka.png" alt=""/>
                </div>
                <div className="contentBx">
                    <h2>Nike Shoes</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur  </p>
                </div>
            </div>
        </div>
    );
};

export default Doctor;