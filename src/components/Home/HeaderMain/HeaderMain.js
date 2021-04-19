import React from 'react';

const HeaderMain = () => {
    return (
        <div className="container">
        <div className="row">
            <div className="col-md-6 d-flex align-items-center">
                <div className="m-1">
                    <h5 className="mb-3">The Leader in Online Services</h5>
                    <h1 className="my-5" style={{color: 'rgb(58, 66, 86)'}}>Get Our Services And <br/> Develop Your Product By Us</h1>
                    <p className="pb-3">We have lot of services for your needs. If you want to make website, android apps, ios apps, games you can choose ours services with out any worry.</p>
                    <form className=" input-group form-inline my-2 my-lg-0 w-75">
                        <input className="form-control" type="search" placeholder="Search Service" aria-label="Search" />
                            <div className="input-group-append">
                            <button className="btn btn-success my-2 my-sm-0" type="submit">Search</button>
                            </div>
                     </form>
                </div>
            </div>
            <div className="col-md-6">

            </div>
        </div>
        </div>
    );
};

export default HeaderMain;