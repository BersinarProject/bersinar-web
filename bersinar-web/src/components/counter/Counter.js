import React from 'react'
import "./Counter.css"

const counter = () => {
    return(
        <div className="container">
            <div className="row countBox justify-content-center">
                <div className="col-3 countDetail">
                    <h2 className="number">
                        1200
                    </h2>
                    <h4 className="textDetail">
                        Bulan
                    </h4>
                </div>
                <div className="col-3 countDetail">
                    <h2 className="number">
                        1200
                    </h2>
                    <h4 className="textDetail">
                        Bulan
                    </h4>            
                </div>
                <div className="col-3 countDetail">
                    <h2 className="number">
                        1200
                    </h2>
                    <h4 className="textDetail">
                        Bulan
                    </h4>
                </div>
                <div className="col-3 countDetail">
                    <h2 className="number">
                        1200
                    </h2>
                    <h4 className="textDetail">
                        Bulan
                    </h4>
                </div>
            </div>
        </div>
    );
};

export default counter;