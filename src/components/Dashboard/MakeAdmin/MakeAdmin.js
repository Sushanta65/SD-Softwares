import React from 'react';
import Footer from '../../../SharedComponents/Footer/Footer';
import Navbar from '../../../SharedComponents/Navbar/Navbar';
import AdminSiteBar from '../AdminSiteBar/AdminSiteBar';

const MakeAdmin = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="row">
                <AdminSiteBar></AdminSiteBar>
                <div className="col-md-10 bg-light">
                    <h4 className="p-4 border-bottom">Make Admin</h4>                    
                        <div className="row pt-3">
                        <div className="col">
                            <div className="addServiceForm border w-50 p-3">
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MakeAdmin;