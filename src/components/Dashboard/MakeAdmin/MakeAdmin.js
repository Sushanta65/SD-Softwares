import React, { useState } from 'react';
import Footer from '../../../SharedComponents/Footer/Footer';
import Navbar from '../../../SharedComponents/Navbar/Navbar';
import AdminSiteBar from '../AdminSiteBar/AdminSiteBar';

const MakeAdmin = () => {
    const [adminInfo, setAdminInfo] = useState({})
    const [adminFile, setAdminFile] = useState(null)

    const handleBlurInput = event => {
        const newAdminInfo = {...adminInfo}
        newAdminInfo[event.target.name] = event.target.value;
        setAdminInfo(newAdminInfo)
    }
    const handleFileChange = event => {
       const newFile = event.target.files[0];
       setAdminFile(newFile)
    }
    console.log(adminInfo.name)

    const AdminSubmit = () => {

        const formData = new FormData()
        formData.append('file', adminFile)
        formData.append('name', adminInfo.name)
        formData.append('email', adminInfo.email)

        fetch('http://localhost:8080/addAdmin', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }
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
                                <form onSubmit={AdminSubmit}>
                                    <div className="form-group">
                                        <label for="#">Name</label>
                                        <input onBlur={handleBlurInput} type="text" className="form-control" name="name" placeholder="Enter Name" />
                                    </div>
                                    <div className="form-group">
                                        <label for="#">Email</label>
                                        <input onBlur={handleBlurInput} type="email" className="form-control" name="email"  placeholder="Enter Email" />
                                    </div>
                                    <div className="form-upload mb-2">
                                        <input onChange={handleFileChange} type="file"  />
                                    </div>
                                        <button type="submit" className="btn btn-success">Submit</button>
                                 </form>
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