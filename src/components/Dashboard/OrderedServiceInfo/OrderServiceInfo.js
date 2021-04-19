import React from 'react';

const OrderServiceInfo = ({serviceInfo, index}) => {
    const {name, email, service, orderTime} = serviceInfo;
    return (
        <div className="col-md-4 mb-3">
           <div className="border p-3">
               <strong className="text-primary pb-3">Ordered No: {index+1}</strong>
               <hr/>
               <h6 className="pt-2">Ordered by {name}</h6>
               <h6>Email: {email}</h6>
               <h6>Ordered Date: {orderTime}</h6>
               <h5 className="pt-4 pb-3">{service.serviceName}</h5>
               <h6>Cost: ${service.price}</h6>
               <div className="status d-flex justify-content-between border mt-3 p-2">
                    <div>
                        <h5 className="text-success">Status</h5>
                    </div>
                    <div>
                        <h6 className="text-info">Processing..</h6>
                    </div>
               </div>
           </div>
        </div>
    );
};

export default OrderServiceInfo;