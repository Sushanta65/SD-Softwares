import React from 'react';
import './Testimonial.css'

const Testimonial = ({testimonial}) => {
    return (
        <div className="col-md-4 mb-4">
            <div className="p-3 testimonial-card">
                <div className="testimonial-des">
                    <p>{testimonial.discription}</p>
                </div>
                <div className="media pt-4">
                    <img className="clients mr-3" src={testimonial.imgURL} alt=""/>
                        <div className="media-body">
                            <h6 className="mt-0 mb-0 text-success">{testimonial.name}</h6>
                            <small>{testimonial.location}</small>
                     </div>
                        </div>
            </div>
        </div>
    );
};

export default Testimonial;