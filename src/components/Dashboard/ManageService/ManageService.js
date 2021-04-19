import React from 'react';

const ManageService = ({service, index}) => {

    const deleteService = (id) =>{
        fetch(`https://young-falls-75593.herokuapp.com/services/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            alert('Service Deleted Successfully')
        })

    }
    return (
        <tr className="infos">
        <th scope="row">{index+1}</th>
            <td>
            <table class="table mt-4 table-hover">
                <thead>
                    <tr>
                        <th scope="col">Service's Name</th>
                        <th scope="col">Service' Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{service.serviceName}</td>
                        <td>${service.servicePrice}</td>
                        <td>
                            <button className="btn btn-primary btn-sm mr-2">Update Service</button> 
                            <button onClick={() => deleteService(service._id)} className="btn btn-danger btn-sm delete">Delete Service</button>
                        </td>
                    </tr>

                </tbody>
            </table>
            </td>
            
        </tr>
    );
};

export default ManageService;