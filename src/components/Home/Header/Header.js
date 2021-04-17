import React from 'react';
import Navbar from '../../../Shared/Navbar/Navbar';
import HeaderMain from '../HeaderMain/HeaderMain';
import './Header.css'

const Header = () => {
    return (
        <div >
            <Navbar></Navbar>
            <div className="header-container py-5">
            <HeaderMain></HeaderMain>
            </div>
            
        </div>
    );
};

export default Header;