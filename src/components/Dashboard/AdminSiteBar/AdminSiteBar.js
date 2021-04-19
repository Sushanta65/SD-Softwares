import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './AdminSiteBar.css'
import { UserContext } from './../../../App';

const AdminSiteBar = () => {
    const [logedInUser] = useContext(UserContext)
    const [isAdmin, setIsAdmin] = useState(false)
    useEffect(() => {
        fetch('https://young-falls-75593.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify({email: logedInUser.email})
        })
        .then(res => res.json())
        .then(data => setIsAdmin(data))
    }, [logedInUser.email])
    return (
        <div className="col-md-2 text-center siteBar p-4 border-right">
        <h4 className="py-2">SD Softwares</h4>
        <ul className="navbar-nav text-left pl-2">
        {!isAdmin && <div>
            <img src={logedInUser.imgURL} style={{width: '50px', marginLeft: '55px', borderRadius: '25px'}} alt=""/>
            <h6 className="mt-3">Hello, <span className="text-success">{logedInUser.name}</span> </h6>
            <hr/>
                <li className="nav-item"><Link className="nav-link" to="/myOrders"><i class="fab fa-shopify"></i> My Orders</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/writeReview"><i class="fas fa-comment-dots"></i> Write a Review</Link></li>
            </div>}
            {isAdmin && <div>
                <img src={logedInUser.imgURL} style={{width: '50px', marginLeft: '55px', borderRadius: '25px'}} alt=""/>
                <h6 className="mt-3">Hello Admin, <span className="text-success">{logedInUser.name}</span></h6>
                <hr/>
                <li className="nav-item"><Link className="nav-link" to="/makeAdmin"><i class="fas fa-user-shield"></i> Make Admin </Link></li>
                <li className="nav-item"><Link className="nav-link" to="/orderList"><i class="fas fa-list"></i> Order List</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/addServices"><i class="fas fa-plus"></i> Add Services</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/manageServices"><i class="fas fa-tasks"></i> Manage Services</Link></li>
            </div>}
            
        </ul>
    </div>
    );
};

export default AdminSiteBar;