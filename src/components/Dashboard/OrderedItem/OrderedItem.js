import React from 'react';

const OrderedItem = ({orderedService, index}) => {
 
    const {name, email, service} = orderedService;
    return (
            <tr>
            <th scope="row">{index+1}</th>
                <td>
                <table class="table mt-4 table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Customer Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Service's Name</th>
                            <th scope="col">Serrvice' Cost</th>
                            <th scope="col">Ordered Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{name}</td>
                            <td>{email}</td>
                            <td>{service.serviceName}</td>
                            <td>${service.price}</td>
                            <td>{service.price}</td>
                        </tr>

                    </tbody>
                </table>
                </td>
                
            </tr>
    );
};

export default OrderedItem;