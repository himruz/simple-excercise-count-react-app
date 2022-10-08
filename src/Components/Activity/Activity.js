import React, { useEffect, useState } from 'react';
import Card from '../Cards/Card'
import './Activity.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faDumbbell } from '@fortawesome/free-solid-svg-icons';
import Sidebar from '../Sidebar/Sidebar';
import FAQ from '../FAQ/FAQ';

const Activity = () => {
    const [cardDatas, setCardData] = useState([]);
    const [sideBar, setSideBar] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data => {
            setCardData(data)
        })
    },[])

    const addToSidebar = (slectedData) =>{
        const newSidaBar = [...sideBar, slectedData]
        setSideBar(newSidaBar)
        // console.log(sideBar)
    }

    return (
        <div className='container-fluid'>
            <div className="row">
                
                <div className="card-container col-lg-9">
                    <div className="title row">
                        <div className='d-flex align-items-center'>
                            <span className='icon'><FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon></span>
                            <h2>Pro-Active-Club</h2>
                        </div>
                        <h3>Select Today's Excercise</h3>
                        {
                        cardDatas.map((cardData) => <Card data={cardData} key={cardData.id} addToSidebar={addToSidebar}></Card>)
                      } 
                    </div>
                    <div className="row">
                    <div class="col-md-6 offset-md-3">
                        <FAQ></FAQ>
                    </div>
                    </div>
                </div>
                
                <div className="col-lg-3">
                    
                        <Sidebar excercises={sideBar}></Sidebar>
                    
                </div>
            </div>
        </div>
        
    );
};

export default Activity;