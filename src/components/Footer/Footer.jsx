import React from 'react'
import './Footer.css'
import FooterComponent from '../FooterComponent/FooterComponent'
import FooterComponent2 from '../FooterComponent2/FooterComponent2'
import ctaThumb from './../../assets/images/ctaThumb.webp'
import { Col, Container, Row } from 'react-bootstrap'



function Footer() {
    return (
        <>   
                
                <div className='Footer'>
                        
                        <FooterComponent/>
                </div>
            <div className='Footer-2'>
                <FooterComponent2/>
            </div>
        
        </>
    )
}

export default Footer
