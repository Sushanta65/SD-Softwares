import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import AdminSiteBar from '../Dashboard/AdminSiteBar/AdminSiteBar';


const PlaceOrder = () => {
    const [logedInUser] = useContext(UserContext)
    const { id } = useParams()
    const [overVIewService, setOverViewService] = useState({})
    const {serviceName, servicePrice, imgURL} = overVIewService
    useEffect(() => {
        fetch(`http://localhost:8080/checkOut/services/${id}`)
            .then(res => res.json())
            .then(data => setOverViewService(data[0]))
    }, [id])

    const placeOrder = () => {
        const serviceDitails = {
            serviceName: serviceName,
            price: servicePrice,
            productImg: imgURL
        }
        const orderDitails = { ...logedInUser, service: serviceDitails, orderTime: new Date().toDateString('dd/MM/yyyy') }

        fetch('http://localhost:8080/addOrder', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderDitails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Your Order Placed Successfully!')
                }
            })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="row">
                <AdminSiteBar></AdminSiteBar>
                <div className="col-md-10 bg-light">
                    <h4 className="p-4 border-bottom">Place Your Order</h4>                    
                        <div className="row pt-3">
                        <div className="col">
                            <div className="addServiceForm border w-50 p-3">
                            <table class="table table-md">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Service Name</th>
                                            <th scope="col">Cost</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>{serviceName}</td>
                                            <td>${servicePrice}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" colSpan="2">Total</th>
                                            <td>${servicePrice}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <button className="btn btn-success" onClick={placeOrder}>Place Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default PlaceOrder;