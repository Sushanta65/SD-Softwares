import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Footer from '../../SharedComponents/Footer/Footer';
import Navbar from '../../SharedComponents/Navbar/Navbar';
import './ServiceCheckOut.css'

const ServiceCheckOut = () => {
    const { id } = useParams()
    const [service, setService] = useState({})
    useEffect(() => {
        fetch(`http://localhost:8080/services/${id}`)
            .then(res => res.json())
            .then(data => setService(data[0]))
    }, [id])

    return (
        <div>
            <Navbar></Navbar>
        <div>
            <div className="serviceOverview">
                
                <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="p-2 mt-2 border-bottom"> 
                        <h3>Service <span className="text-success">Overview</span></h3>
                        <p>This is the <span className="text-success">{service.serviceName}</span> Service. If you want get the service from us, you can check out.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className=" mt-3 p-3">
                        <h4>{service.serviceName}</h4>
                        <p>{service.discription}</p>
                        <strong>You may cost <span className="text-danger"> ${service.servicePrice}</span> for any kind of {service.serviceName} Service. Its our opinions.</strong><br/>
                        <div className="mt-3 mb-1">
                        <i className="fa fa-star text-success"></i> <i className="fa fa-star text-success"></i> <i className="fa fa-star text-success"></i> <i className="fa fa-star text-success"></i> <i className="fa fa-star empty-star"></i> Its 4 Stared</div>
                        <Link to={`/checkOut/services/${id}`}><button className="btn btn-success mt-3">Check Out</button></Link>
                        </div> 
                    </div>
                    <div className="col-md-6 d-flex align-items-center justify-content-center">
                        <div>
                            <img className="img-fluid" src={service.imgURL} alt=""/>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default ServiceCheckOut;