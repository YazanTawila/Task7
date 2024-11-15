import React from 'react'
import './LogosComponents.css'
import BrandLogo1 from './../../assets/images/brandLogo1_1.svg'
import BrandLogo2 from './../../assets/images/brandLogo1_2.svg'
import BrandLogo3 from './../../assets/images/brandLogo1_3.svg'
import BrandLogo4 from './../../assets/images/brandLogo1_4.svg'
import BrandLogo5 from './../../assets/images/brandLogo1_5.svg'

export default function LogosComponents() {
    return (
        <section className='LogosComponents'>
            <div className='images-dev'>
                <a href="#"><img src={BrandLogo1} alt="contentful logo" /></a>
                <a href="#"><img src={BrandLogo2} alt="culture amp logo" /></a>
                <a href="#"><img src={BrandLogo3} alt=" dropbox logo" /></a>
                <a href="#"><img src={BrandLogo4} alt=" airtable logo" /></a>
                <a href="#"><img src={BrandLogo5} alt="razorpay logo" /></a>
            </div>
        </section>
)
}
