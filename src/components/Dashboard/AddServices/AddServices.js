import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Footer from '../../../Shared/Footer/Footer';
import Navbar from '../../../Shared/Navbar/Navbar';
import AdminSiteBar from '../AdminSiteBar/AdminSiteBar';

const AddServices = () => {
    const { register, handleSubmit } = useForm();
    const [imgURL, setImgURL] = useState('')
    const onSubmit = data => {
        const price = parseFloat(data.servicePrice)
        const serviceData = {
            serviceName: data.serviceName,
            servicePrice: price,
            discription: data.description,
            imgURL: imgURL

        }
        fetch('http://localhost:8080/addService', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(serviceData)
        })
        .then(res => {
            console.log(res)
        })
        console.log(serviceData)
    };

    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imgData = new FormData();
        imgData.set('key', 'dc5ff909700b7f4eb5f2277679a2826d')
        imgData.append('image', event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', imgData)
          .then(res => {
            setImgURL(res.data.data.display_url);
            console.log(res.data.data.display_url)
          })
          .catch(function (error) {
            console.log(error);
          });
          console.log(imgURL)
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="row">
                <AdminSiteBar></AdminSiteBar>
                <div className="col-md-10 bg-light">
                    <h4 className="p-4 border-bottom">Add More Services</h4>                    
                        <div className="row pt-3">
                        <div className="col">
                            <div className="addServiceForm border w-50 p-3">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input className="form-control mb-3" name="serviceName" placeholder="Service Name" ref={register({required: true})} />
                                    <input className="form-control mb-3" name="servicePrice" placeholder="Service Price" ref={register({ required: true })} />
                                    <input className="form-control mb-3 py-4" type="text" name="description" placeholder="Service Description" ref={register({ required: true })}/>
                                    <label htmlFor="#image">Choose Service Image</label><br/>
                                    <input onChange={handleImageUpload} type="file" id="image" className="mb-3" ref={register}/><br/>
                                    <input className="btn btn-success" type="submit" />
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

export default AddServices;