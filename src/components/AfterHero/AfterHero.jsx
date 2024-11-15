import React from 'react'
import './AfterHero.css'
import asterisk from './../../assets/images/asterisk.svg'
function AfterHero() {
    return (
        <div className='AfterHero-Section'>
        <ul>
            <li ><img src={asterisk} alt="" />Cyber Security</li>
            <li className='display-none'><img src={asterisk} alt="" />It Solution</li>
            <li className='display-none'><img src={asterisk} alt="" />Technology</li>
            <li className='display-none'><img src={asterisk} alt="" />Data Analyst</li>
        </ul>
    </div>
    )
}

export default AfterHero
