import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    return (
        <div className="col-md-4 mb-2">
            <div className="serviceCard ">
            <div className="card">
                     <img className="card-img-top card-img" src={service.imgURL} alt=""/>
                     <div className="card-body">
                        <h5 className="card-title">{service.serviceName}</h5>
                        <p className="card-text">{service.discription}</p>
                        <h5 className="price">${service.servicePrice}</h5>
                        <i className="fa fa-star text-success"></i> <i className="fa fa-star text-success"></i> <i className="fa fa-star text-success"></i> <i className="fa fa-star text-success"></i> <i className="fa fa-star empty-star"></i> <Link to={`/services/${service._id}`}> <button className="float-right btn btn-success text-white" style={{color:'#ab0534'}} title="Get a Quota">Get a Quota</button></Link>
                     </div>
                  </div>
            </div>
        </div>
    );
};

export default Service;