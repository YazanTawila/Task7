import React from 'react'
import './EnvatoSection.css'
import envatoImage from './../../assets/images/envato.jpg'
import envatoImageGray from './../../assets/images/envato-gray.jpg'
function EnvatoSection() {
    return (
        <div className='EnvatoSection'>
            <p className='EnvatoSection-p'>1k + Brands Trust Us</p>
            <div className='EnvatoSectionImages'>
                <a href="#" className='envatoImageGray'><img src={envatoImageGray} alt="" /></a>
                <a href="#" className='envatoImageGray'><img src={envatoImageGray} alt="" /></a>
                <a href="#" ><img src={envatoImage} alt=" " /></a>
                <a href="#" className='envatoImageGray'><img src={envatoImageGray} alt=" " /></a>
                <a href="#" className='envatoImageGray'><img src={envatoImageGray} alt="" /></a>
            </div>
        </div>
    )
}

export default EnvatoSection
