import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
        <footer className="footer-section mt-5 px-4 py-3">
            <section className="container">
            <div className="row">
                <div className="col-md-3">
                    <h5>Company</h5>
                        <ul className="pl-0">
                            <li><Link className="text-light">About</Link></li>
                            <li><Link className="text-light">Pricing</Link></li>
                            <li><Link className="text-light">Blogs</Link></li>
                            <li><Link className="text-light">Career</Link></li>
                            <li><Link className="text-light">Contact</Link></li>
                        </ul>
                </div>
                <div className="col-md-3">
                    <h5>Platform</h5>
                        <ul className="pl-0">
                            <li><Link className="text-light">Browser Library</Link></li>
                            <li><Link className="text-light">RoleIO</Link></li>
                            <li><Link className="text-light">Skill IQ</Link></li>
                            <li><Link className="text-light">Parter Progeams</Link></li>
                            <li><Link className="text-light">Authors</Link></li>
                        </ul>
                </div>
                <div className="col-md-3">
                    <h5>Resources</h5>
                        <ul className="pl-0">
                            <li><Link className="text-light">Library</Link></li>
                            <li><Link className="text-light">Guides</Link></li>
                            <li><Link className="text-light">Tutorials</Link></li>
                            <li><Link className="text-light">FAQ</Link></li>
                       
                        </ul>
                </div>
                <div className="col-md-3">
                    <h5>Get in Touch</h5>
                        <ul className="pl-0">
                            <li><Link className="text-light">About</Link></li>
                            <li><Link className="text-light">Pricing</Link></li>
                            <li><Link className="text-light">Blogs</Link></li>
                            <li><Link className="text-light">Career</Link></li>
                            <li><>Contact</></li>
                        </ul>
                </div>
                
            </div>
            </section>
           
        </footer>
         <div className="sub-footer bg-dark text-white border-top text-center">
         <p>&copy; Copyright {new Date().getFullYear()} all right resurved SD Softwares. </p>
     </div>
     </div>
    );
};

export default Footer;