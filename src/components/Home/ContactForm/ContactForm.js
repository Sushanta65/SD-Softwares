import React from 'react';
import './ContactForm.css'

const ContactForm = () => {
    return (
        <section className="contactForm py-5 border text-center">
        <div className="container">
            <div className="row">
                <div className="col">
                    <h3 className="text-capitalize">Contact With Us</h3>
                    <p className="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis nemo iure, ullam consectetur veritatis ex in tempore dolor impedit explicabo.</p>
                    <form className="form-inline justify-content-center" action="#" method="POST">
                        <label className="sr-only" for="name">Email</label>
                        <input className="form-control m-2" type="email" placeholder="Enter Email"/>
                        <label className="sr-only" for="#">Message</label>
                        <input className="form-control m-2" type="text" name="message" placeholder="Write Your Message"/>
                        <input className="btn btn-primary m-2" type="submit" value="Subscribe"/>
                    </form>
            </div>
        </div>
        </div>
        </section>
    );
};

export default ContactForm;