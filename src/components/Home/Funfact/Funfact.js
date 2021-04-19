import React from 'react';

const Funfact = () => {
    return (
        <section className="container funfact pt-5 mt-3 mb-3 text-center">
             <h2 style={{color: 'rgb(58, 66, 86)'}}><span className="text-success">Strength</span> in Numbers</h2>
             <p>Funfact We are Worked</p>
            <div className="row mt-5">
               
                <div className="col-md-3">
                    <div className="text-center border-right">
                        <h4 style={{color: 'rgb(58, 66, 86)'}}>20K+</h4>
                        <p>Clients & Still Counting</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="text-center border-right">
                        <h4 style={{color: 'rgb(58, 66, 86)'}}>10K+</h4>
                        <p>Finshed Worked</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="text-center border-right">
                        <h4 style={{color: 'rgb(58, 66, 86)'}}>3+</h4>
                        <p>Services We have</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="text-center">
                        <h4 style={{color: 'rgb(58, 66, 86)'}}>11K+</h4>
                        <p>Happy Clients</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Funfact;