import React from 'react'
import './SectionTitle.css'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { HiArrowSmRight } from "react-icons/hi";
function SectionTitle({SectionName,SectionTitle}) {
    return (
        <Container>
            <div className='SectionTitle'>
                <HiOutlineArrowNarrowLeft /> <span>{SectionName}</span> <HiOutlineArrowNarrowRight />
            </div>
            <Row>
                <Col lg={6} md={12}  className='left-section'>
                    <h2>{SectionTitle}</h2>
                </Col>
                <Col lg={6} md={12}  className='right-section'>
                    <button><HiOutlineArrowSmLeft className='arrow-icon'/></button>
                    <button><HiArrowSmRight className='arrow-icon'/></button>
                    
                </Col>
            </Row>
        </Container>
    )
}

export default SectionTitle
