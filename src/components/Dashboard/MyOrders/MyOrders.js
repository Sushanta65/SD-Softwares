import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Footer from '../../../SharedComponents/Footer/Footer';
import Navbar from '../../../SharedComponents/Navbar/Navbar';
import AdminSiteBar from '../AdminSiteBar/AdminSiteBar';
import OrderServiceInfo from '../OrderedServiceInfo/OrderServiceInfo';
import './MyOrder.css'

const MyOrders = () => {
    const [orders, setOrders] = useState([])
    const [logedInUser] = useContext(UserContext)
    useEffect(() => {
        fetch('https://young-falls-75593.herokuapp.com/orders?email='+logedInUser.email)
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [logedInUser])
    console.log(orders)
    return (
        <div>
            <Navbar></Navbar>
            <div className="row h-100">
                <AdminSiteBar></AdminSiteBar>
                <div className="col-md-10 bg-light">
                    <h4 className="p-4 border-bottom">My Orders</h4>  
                    <p className="pl-4">Your Ordered Service: {orders.length}</p>                  
                        <div className="row pt-3">
                        <div className="col myOrders">
                            <div className="addServiceForm h-100 border p-3">
                            <div className="serviceOverview">
                                <div className="row">
                                <div className="w-100 text-center">
                                    {orders.length === 0 &&
                                        <div class="spinner-border text-success" role="status">
                                        <span class="sr-only">Loading...</span>
                                      </div>}
                                      </div>
                                    
                                {
                                    orders.map((orderedServiceInfo, index) => <OrderServiceInfo index={index} serviceInfo={orderedServiceInfo}></OrderServiceInfo>)
                                }
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

export default MyOrders;