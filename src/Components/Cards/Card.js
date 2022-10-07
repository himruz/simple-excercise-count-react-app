import React from 'react';
import  './Card.css';

const Card = (props) => {
    const {title, img, descr,age,time} = props.data
    const {data} = props
    console.log(data)
    return (
        
            <div className="col-lg-4 mt-5">
                <div className="card shadow"  style={{width: '18rem'}}>
                    <img src={img} alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{descr.length>113 ? descr.slice(0,113)+`...`: descr}</p>
                        <p className='age d-flex align-items-center'>For age :  {age}</p>
                        <p className='time d-flex align-items-center'>Time :  {time} Second</p>
                        <div className="d-flex justify-content-center">
                        <button className='btn btn-primary'>Add to list</button>
                        </div>
                    </div>
                </div>
            </div>
        
    );
};

export default Card;