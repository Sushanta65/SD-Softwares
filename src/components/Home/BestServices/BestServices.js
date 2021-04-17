import React from 'react';
import './BestServices.css'
import { Link } from 'react-router-dom';
const BestServices = () => {
    return (
             <section className="discover-people mt-5 pb-4">
         <div className="container">
            <div className="row pt-5">
               <div className="col">
                  <h2 style={{color: '#3A4256'}}>Best <span className="text-success">Services</span></h2>
                  <p style={{fontSize:'11px',display:'inline'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Totam cum labore exercitationem.</p>
               </div>
            </div>
            <div className="row py-5 need-pb-more">
               <div className="col-md-4 "> <Link className="btn btn-lg d-block top-rated">Mern Stack Development</Link></div>
               <div className="col-md-4 mt-3 mt-md-0"> <Link className="btn btn-lg d-block trending">IOS Development</Link></div>
               <div className="col-md-4 mt-3 mt-md-0"> <Link className="btn btn-lg d-block noteworthy">New and Noteworthy</Link></div>
            </div>
         </div>
      </section>
    );
};

export default BestServices;