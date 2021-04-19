import React from 'react';

const OrderedItem = ({orderedService, index}) => {
 
    const {name, email, orderTime, service} = orderedService;
    return (
            <tr>
            <th scope="row">{index+1}</th>
                <td>
                <table className="table mt-4 border table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Customer Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Service's Name</th>
                            <th scope="col">Serrvice' Cost</th>
                            <th scope="col">Ordered Date</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{border: '1px'}}>
                            <td>{name}</td>
                            <td>{email}</td>
                            <td>{service.serviceName}</td>
                            <td>${service.price}</td>
                            <td>{orderTime}</td>
                            <td className="text-info"><strong>Processing..</strong></td>
                            <td><button className="btn btn-danger btn-sm">Cancel</button></td>
                        </tr>

                    </tbody>
                </table>
                </td>
                
            </tr>
    );
};

export default OrderedItem;