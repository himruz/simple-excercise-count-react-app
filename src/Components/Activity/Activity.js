import React, { useEffect, useState } from 'react';
import Card from '../Cards/Card'
import './Activity.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faDumbbell } from '@fortawesome/free-solid-svg-icons';

const Activity = () => {
    const [cardDatas, setCardData] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data => {
            setCardData(data)
        })
    },[])
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="card-container col-lg-9 mt-5">
                    <div className="title row">
                        <div className='d-flex align-items-center'>
                            <span className='icon'><FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon></span>
                            <h2>Pro-Active-Club</h2>
                        </div>
                        <h3>Select Today's Excercise</h3>
                        {
                        cardDatas.map((cardData) => <Card data={cardData} key={cardData.id}></Card>)
                      } 
                    </div>
                                                    
                </div>
                <div className="col-lg-3">
                    <h2>this is sidebar component</h2>
                </div>
            </div>
        </div>
        
    );
};

export default Activity;