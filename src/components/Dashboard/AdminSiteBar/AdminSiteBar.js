import React from 'react';
import { Link } from 'react-router-dom';
import './AdminSiteBar.css'

const AdminSiteBar = () => {
    return (
        <div className="col-md-2 text-center siteBar p-4 border-right">
        <h4 className="py-2">SD Softwares</h4>
        <ul className="navbar-nav text-left pl-2">
            <li className="nav-item"><Link className="nav-link" to="/addServices"><img src='' alt="" />Add Services</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/makeAdmin"><img src="" alt="" /> Make Admin </Link></li>
            <li className="nav-item"><Link className="nav-link" to="/writeReview"><img src="" alt="" />Write a Review</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/orderList"><img src="" alt="" />Order List</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/myOrders"><img src="" alt="" />My Orders</Link></li>
        </ul>
    </div>
    );
};

export default AdminSiteBar;