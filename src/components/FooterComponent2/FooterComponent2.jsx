import React from 'react'
import './FooterComponent2.css'
import { Col, Container, Row } from 'react-bootstrap'
function FooterComponent2() {
    return (
        <Container className='Footer-Component-2'>
            <div className='Footer-Component-2-left'>
                <p>&copy; All Copyright 2024 by Extech</p>
            </div>
            <div className='Footer-Component-2-right'>
                <div>
                    <p>Terms & Condition</p>
                </div>
                <div>
                    <p>Privacy Policy</p>
                </div>
            </div>
        </Container>
    )
}

export default FooterComponent2
