import React from 'react';
import './ContactForm.css'

const ContactForm = () => {
    return (
        <section className="contactForm py-5 text-center">
            <div className="w-50 m-auto">
                <h2 style={{color: 'rgb(58, 66, 86)'}}><span className="text-success">Contact</span> With Us</h2>
                <p>Let's Say to Us</p>
                <div className="mt-5">
                    <input className="form-control mb-4" type="text" placeholder="Name"/>
                    <input className="form-control mb-4" type="text" placeholder="Email"/>
                    <textarea className="form-control mb-4" cols="30" rows="4" placeholder="Message"></textarea>
                    <button className="btn btn-success">Send Massege</button>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;