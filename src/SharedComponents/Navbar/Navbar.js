import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Navbar = () => {
    const [logedInUser] = useContext(UserContext)
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-light bg-light py-3 border-bottom">
                <div className="container">
                <Link style={{fontWeight: "bold"}} className="navbar-brand text-success" to="/">SD Softwares</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item mr-2 active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item mr-2">
                            <Link className="nav-link" to="/about">About Us</Link>
                        </li>
                        
                        <li className="nav-item mr-2">
                            <Link className="nav-link" to="/dashboard">Dashboard</Link>
                        </li>
                        <li className="nav-item mr-2">
                            <Link className="nav-link" to="/admin">Admin</Link>
                        </li>
                        {!logedInUser.email? <li className="nav-item mr-2">
                            <Link className="nav-link text-success" to="/login">Login</Link>
                        </li>: <li className="nav-item mr-2">
                            <Link className="nav-link text-success" to="#">Logout</Link>
                        </li>}
                    </ul>
                    <div className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search Service" aria-label="Search" />

                            <button className="btn btn-success my-2 my-sm-0">Search</button>
                        
                     </div>
                    </div>
                    </div>
                    </nav>
                 </div>
    );
};

export default Navbar;