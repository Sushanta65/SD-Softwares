import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from '../Service/Service';

const Services = () => {
 
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:8080/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div className="container serviecs px-3 mt-5">
            <div className="row">
               <div className="col">
                  <h2 style={{color: '#3A4256'}}>Our Awesome <span className="text-success">Services</span></h2>
                  <Link className="btn btn-outline-secondary float-right">View More</Link>
                  <p style={{fontSize:'11px',display:'inline'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Totam cum labore exercitationem.</p>
               </div>
            </div>
            <div className="row mt-5">
                {
                    services.map(service => <Service service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;