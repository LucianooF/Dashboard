import React, { useEffect } from "react";
import "../stylesheets/Card.css"
import iconImg from '../media/calendar-month-icon.png'


function Card(dateRange, channels, brands, sku) {

    //efecto visual con cuando renderiza
    //


    return (
        <div className='card-container'>
            <div className='card-icon'>
            <img src={iconImg} className='img-fluid'/>
            </div>
            <div className='card-text'>
                <p className="stat-cards-info__num">?????</p>
                <p className="stat-cards-info__title">Total paid</p>
                <p className="stat-cards-info__progress">
                    <span className="stat-cards-info__profit success">
                    <i data-feather="trending-up" aria-hidden="true"></i>?.??%
                    </span>
                    Last Week
                </p>
            </div>
        </div>
    )
}

export default Card;