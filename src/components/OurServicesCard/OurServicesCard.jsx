import React from 'react'
import './OurServicesCard.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";


function OurServicesCard({title,des,image}) {
    return (
        <div className='card-1'>
            <div className='image-div'>
                <img src={image} alt="card logo" />
            </div>
            <h4>{title}</h4>
            <p>{des}</p>
            <button>Read More <MdKeyboardDoubleArrowRight /></button>
        </div>
    
    )
}

export default OurServicesCard
