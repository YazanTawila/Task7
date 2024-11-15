import React from 'react'
import './AboutHero.css'
import { MdKeyboardArrowRight } from "react-icons/md";
import asterisk from './../../assets/images/asterisk.svg'

import { Col, Container, Row } from 'react-bootstrap';

function AboutHero({HeroTitle,HeroP}) {
    return (
        
        <>
            <div className='AboutHero'>
                <div className='overlay'>

                </div>
                <div className='AboutHero-content'>
                    <h1>{HeroTitle}</h1>
                    <p>Home <MdKeyboardArrowRight /> {HeroP}</p>
                </div>
            </div>

        </>
    )
}

export default AboutHero
