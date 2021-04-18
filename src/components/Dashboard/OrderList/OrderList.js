import React, { useEffect, useState } from 'react';
import Footer from '../../../SharedComponents/Footer/Footer';
import Navbar from '../../../SharedComponents/Navbar/Navbar';
import AdminSiteBar from '../AdminSiteBar/AdminSiteBar';
import OrderedItem from '../OrderedItem/OrderedItem.js';

const OrderList = () => {
    const [orderedIteam, setOrderedIteam] = useState([])

    useEffect(() => {
        fetch('https://young-falls-75593.herokuapp.com/ordersList')
        .then(res => res.json())
        .then(data => setOrderedIteam(data))
    }, [])
    console.log(orderedIteam)
    return (
        <div>
            <Navbar></Navbar>
            <div className="row">
                <AdminSiteBar></AdminSiteBar>
                <div className="col-md-10 bg-light">
                    <h4 className="p-4 border-bottom">Order List</h4>                    
                        <div className="row pt-3">
                        <div className="col">
                            <div className="addServiceForm p-3">
                                <table class="table border">
                                    <thead>
                                        <tr>
                                            <th scope="col">No</th>
                                            <th scope="col">All Orders Ditails</th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            orderedIteam.map((orderedService, index) => <OrderedItem index={index} orderedService={orderedService}></OrderedItem>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default OrderList;