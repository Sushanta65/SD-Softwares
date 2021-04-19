import { React, useState, useEffect } from 'react';
import Footer from '../../../SharedComponents/Footer/Footer';
import Navbar from '../../../SharedComponents/Navbar/Navbar';
import AdminSiteBar from '../AdminSiteBar/AdminSiteBar';
import ManageService from '../ManageService/ManageService';

const ManageServices = () => {
    const [manageService, setManageService] = useState([])

    useEffect(() => {
        fetch('https://young-falls-75593.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setManageService(data))
    }, [])
    console.log(manageService)
    return (
        <div>
            <Navbar></Navbar>
            <div className="row h-100">
                <AdminSiteBar></AdminSiteBar>
                <div className="col-md-10 bg-light">
                    <h4 className="p-4 border-bottom">Manage Services</h4>  
                    <p className="pl-4">Total Abailable Services: {manageService.length}</p>                  
                        <div className="row pt-3">
                        <div className="col myOrders">
                            <div className="addServiceForm h-100 border p-3">
                            <div className="serviceOverview">
                                <div className="row">   
                                <table class="table border m-4">
                                
                                    <thead>
                                        <tr>
                                            <th scope="col">No</th>
                                            <th scope="col">All Service</th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        
                                        {
                                            manageService.map((service, index) => <ManageService index={index} service={service}></ManageService>)
                                        }
                                    </tbody>
                                </table>
                                <div className="w-100 text-center">
                                            {manageService.length === 0 && <div className="spinner-border text-success" role="status">
                                                <span class="sr-only">Loading...</span>
                                            </div>}
                                        </div>
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

export default ManageServices;