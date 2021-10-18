import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import notfound from "../../404.png"

const NotFount = () => {
    return (
        <div>
           <Container>
               <img className="img-fluid" src={notfound} alt="" style={{height: "80vh"}}/>
               <Link to="/home"><button className="btn my-5" style={{ background: "#23CB77" }}>Go Back Home</button></Link>
           </Container>
        </div>
    );
};

export default NotFount;