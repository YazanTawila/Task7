
import './OurServicesCards2.css'
import React from 'react'

function OurServicesCards2({CardNumber,title,des}) {
    return (
        <div className='card-2'>
            <h3 className='card-number'>{CardNumber}</h3>
            <h4>{title}</h4>
            <p>{des}</p>
        </div>
    )
}

export default OurServicesCards2
