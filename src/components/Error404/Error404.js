import React from 'react';
import Navbar from '../../SharedComponents/Navbar/Navbar';

const Error404 = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h4 className="text-center py-3">Page Not Found!</h4>
        </div>
    );
};

export default Error404;