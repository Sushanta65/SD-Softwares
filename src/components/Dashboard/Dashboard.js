import React from 'react';
import Footer from '../../SharedComponents/Footer/Footer';
import Navbar from '../../SharedComponents/Navbar/Navbar';
import AdminSiteBar from './AdminSiteBar/AdminSiteBar';

const Dashboard = () => {
    return (
        <div>
        <Navbar></Navbar>
        <div className="row h-100">
            <AdminSiteBar></AdminSiteBar>
            <div className="col-md-10 bg-light">
                <h4 className="p-4 border-bottom">Dashboard</h4>  
                <p className="pl-4"></p>                  
                    <div className="row pt-3">
                    <div className="col myOrders">
                        <div className="addServiceForm h-100 border p-3">
                        <div className="serviceOverview">
                            <div className="row">
                            
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
    );
};

export default Dashboard;