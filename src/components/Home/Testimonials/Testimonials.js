import React, { useEffect, useState } from 'react';
import Testimonial from './../Testimonial/Testimonial';
const Testimonials = () => {
  

    const [testimonials, setTestimonials] = useState([])
    useEffect(() => {
        fetch('http://localhost:8080/reviews')
        .then(res => res.json())
        .then(data => setTestimonials(data))
    }, [])
    return (
        <div className="testimonials pb-5 pt-3">
            <div className="container">
            <div className="row">
                <div className="testimonial w-100 py-5">
                <div className="col-md-12">
                   <div>
                        <h2 style={{color: '#3A4256'}} className="text-capitalize">Clients <span className="text-success">Reviews</span></h2>
                        <p style={{fontSize: '11px', width: '250px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Totam cum labore exercitationem.</p>
                   </div>
                </div>
                </div>
                <div className="testimonialCard">
                    <div className="row">
                    {
                        testimonials.map(testimonial => <Testimonial testimonial={testimonial}></Testimonial>)
                    }
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Testimonials;