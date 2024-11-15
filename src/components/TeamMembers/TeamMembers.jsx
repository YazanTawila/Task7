import React from 'react'
import './TeamMembers.css'
import { Col, Container, Row } from 'react-bootstrap'
import { HiArrowSmRight, HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from 'react-icons/hi'
import AboutCard from '../AboutCard/AboutCard'
import image04 from './../../assets/images/04.webp'
import image05 from './../../assets/images/05.webp'
import image06 from './../../assets/images/06.webp'
import image07 from './../../assets/images/07.webp'

function TeamMembers() {
    return (
        <Container>
            <div className='Team-Members-Title'>
                <HiOutlineArrowNarrowLeft /> <span>TEAM MEMBERS</span> <HiOutlineArrowNarrowRight />
            </div>
            <Row>
                <Col lg={6} md={12}  className='Team-Members-left-section'>
                    <h2>Our Dedicated Team Members</h2>
                </Col>
                <Col lg={6} md={12}  className='Team-Members-right-section'>
                    
                    <button> All Members<HiArrowSmRight className=''/></button>
                    
                </Col>
            </Row>
            <Row>
                <Col lg={3} md={6} sm={12}>
                        <AboutCard
                            AboutCardName={"masirul Islam"}
                            AboutCardParagraph={"Web Design"}
                            AboutCardImage={image04}
                        />
                </Col>
                <Col lg={3} md={6} sm={12}>
                        <AboutCard
                            AboutCardName={"Jessica Mardol"}
                            AboutCardParagraph={"Cyber Expert"}
                            AboutCardImage={image05}
                        />
                </Col>
                <Col lg={3} md={6} sm={12}>
                        <AboutCard
                            AboutCardName={"Arnold Hemingway"}
                            AboutCardParagraph={"Web Expert"}
                            AboutCardImage={image06}
                        />
                </Col>
                <Col lg={3} md={6} sm={12}>
                        <AboutCard
                            AboutCardName={"Shikon Haque"}
                            AboutCardParagraph={"Data Analyst"}
                            AboutCardImage={image07}
                        />
                </Col>
            </Row>
        </Container>
    )
}

export default TeamMembers
