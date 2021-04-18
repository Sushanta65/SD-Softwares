import React from 'react';
import Header from './Header/Header';
import Services from './Services/Services';
import BestServices from './BestServices/BestServices';
import Testimonials from './Testimonials/Testimonials';
import Footer from '../../SharedComponents/Footer/Footer';
import ContactForm from './ContactForm/ContactForm';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <BestServices></BestServices>
            <Testimonials></Testimonials>
            <ContactForm></ContactForm>
            <Footer></Footer>
        </div>
    );
};

export default Home;