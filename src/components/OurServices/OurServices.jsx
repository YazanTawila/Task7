import React from 'react'
import './OurServices.css'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardComponent from '../OurServicesCard/OurServicesCard';
import OurServicesCard from '../OurServicesCard/OurServicesCard';
import image1 from './../../assets/images/serviceIcon1_1.svg'
import image2 from './../../assets/images/serviceIcon1_2.svg'
import image3 from './../../assets/images/serviceIcon1_3.svg'
import image4 from './../../assets/images/serviceIcon1_4.svg'
import OurServicesCards2  from '../OurServicesCards2/OurServicesCards2';
import SectionTitle from '../SectionTitle/SectionTitle';

function OurServices() {
    

    return (
    <>
        <Container  className='OurServices'>
            <SectionTitle
                SectionName={"OUR SERVICES"}
                SectionTitle={"Elevating Businesses With IT Ingenuity"}
            />
            
            <Row className='OurServicesCards'>
                <Col lg={3} md={6} sm={12}>
                    <OurServicesCard
                        title={"Woo Commerce"}
                        des={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, vel?"}
                        image={image2}
                        />
                </Col>
                <Col lg={3} md={6} sm={12}>
                    <OurServicesCard
                        title={"CRM Solutions"}
                        des={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, vel?"}
                        image={image3}
                    />
                </Col>
                <Col lg={3} md={6} sm={12}>
                    <OurServicesCard
                        title={"Web Design"}
                        des={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, vel?"}
                        image={image4}
                    />
                </Col>
                <Col lg={3} md={6} sm={12}>
                    <OurServicesCard
                        title={"Data Guard Sentinel"}
                        des={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, vel?"}
                        image={image1}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                        <iframe className='video' width="100%" height="500" src="https://www.youtube.com/embed/N3AkSS5hXMA?si=Ze6bjHSsvuY6Yyth" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </Col>
            </Row>
            
        </Container>
        <div className='OurServicesCards2'>
        <Container >
            <Row>
                <Col lg={3} md={6} sm={12}>
                        <OurServicesCards2
                            CardNumber={"01"}
                            title={"Requirement"}
                            des={"There are many variations of passages of Lorem Ipsum available ,but th majoraity have suffered alteration"}
                            
                        />
                </Col>
                <Col lg={3} md={6} sm={12}>
                        <OurServicesCards2
                            CardNumber={"02"}
                            title={"UI/UX Desing"}
                            des={"There are many variations of passages of Lorem Ipsum available ,but th majoraity have suffered alteration"}
                            
                        />
                </Col>
                <Col lg={3} md={6} sm={12}>
                        <OurServicesCards2
                            CardNumber={"03"}
                            title={"Prototype"}
                            des={"There are many variations of passages of Lorem Ipsum available ,but th majoraity have suffered alteration"}
                            
                        />
                </Col>
                <Col lg={3} md={6} sm={12}>
                        <OurServicesCards2
                            CardNumber={"04"}
                            title={"Development"}
                            des={"There are many variations of passages of Lorem Ipsum available ,but th majoraity have suffered alteration"}
                            
                        />
                </Col>
            </Row>
        </Container>
        </div>
        
    </>
    )
    
}

export default OurServices
