import React, { useState } from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({excercises}) => {
    console.log(excercises);
    let excerciseTime = 0;
    for (const excercise of excercises) {
        excerciseTime = excerciseTime + excercise.time
    }

    const [breakTime, setBreakTime] = useState('')
    // add break time
    const addBreak= (value) =>{
        setBreakTime(value)
    }

    return (
        <div className='sidebar mt-5'>
            <div className="profile-info d-flex align-items-center">
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU' alt="" />
                <div className="profile-meta">
                    <h4>Hasan Imruz</h4>
                    <div className="location d-flex">
                        <span className='location-icon me-3'><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon></span>
                        <p>Dhaka, Bangladesh</p>
                    </div>
                </div>
            </div>
            <div className="body-info text-center mt-5">
                <div className="row">
                    <div className="col-lg-4">
                        <h4>65<span>KG</span></h4>
                        <h5>Weight</h5>
                    </div>
                    <div className="col-lg-4">
                        <h4>6.5</h4>
                        <h5>Height</h5>
                    </div>
                    <div className="col-lg-4">
                        <h4>20<span>yrs</span></h4>
                        <h5>Age</h5>
                    </div>
                </div>
            </div>
            <div className="add-break  mt-5">
                <div className="break-title">
                    <h4>Add A Break</h4>
                </div>
                <div className="add-break-wrapper text-center mt-3">
                    <div className="break-time">
                        <span onClick={() =>{addBreak(10)}}>10s</span>
                    </div>
                    <div className="break-time">
                        <span onClick={() =>{addBreak(20)}}>20s</span>
                    </div>
                    <div className="break-time">
                        <span onClick={() =>{addBreak(30)}}>30s</span>
                    </div>
                    <div className="break-time">
                        <span onClick={() =>{addBreak(40)}}>40s</span>
                    </div>
                    <div className="break-time">
                        <span onClick={() =>{addBreak(50)}}>50s</span>
                    </div>
                </div>
             </div>
             <div className="excercise-details  mt-5">
                <div className="break-title">
                    <h4>Escercise Details</h4>
                </div>
                <div className="excercise-time mt-5 d-flex align-items-center">
                    <h4 className='me-3'>Excercise Time</h4>
                    <span>{excerciseTime} Second</span>
                </div>
                <div className="break d-flex align-items-center mt-3">
                    <h4 className='me-3'>Break Time</h4>
                    <span>{breakTime} Second</span>
                </div>
                <div className="complete btn">
                    <button className='btn btn-primary'>Activity Completd</button>
                </div>
             </div>
        </div>
    );
};

export default Sidebar;

