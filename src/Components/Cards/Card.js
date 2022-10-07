import React from 'react';

const Card = () => {
    return (
        <div className='row'>
            <div className="col-lg-4">
                <div classNameName="card"  style={{width: '18rem'}}>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button className='btn btn-primary'>Add to list</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;