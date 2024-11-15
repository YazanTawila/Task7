import React from 'react'
import './BeforeFooterComponent.css'
import { Col, Container, Row } from 'react-bootstrap'
import ctaThumb from './../../assets/images/ctaThumb.webp'
function BeforeFooterComponent() {
    return (
        <Container className='BeforeFooterComponent'>
            <Row>
                <Col>
                    <img src={ctaThumb} alt="" />
                </Col>
            </Row>

        </Container>
    )
}

export default BeforeFooterComponent
