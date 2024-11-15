import React from 'react'
import './BlogAndNews.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap'
import SectionTitle from '../SectionTitle/SectionTitle'
import BlogAndNewsCard from '../BlogAndNewsCard/BlogAndNewsCard'
import blogThumb1 from './../../assets/images/blogThumb1_1.webp'
import blogThumb2 from './../../assets/images/blogThumb1_2.webp'
import blogThumb3 from './../../assets/images/blogThumb1_3.webp'
import blogProfile1 from './../../assets/images/blogProfile1_1.webp'
import blogProfile2 from './../../assets/images/blogProfile1_2.webp'
import blogProfile3 from './../../assets/images/blogProfile1_3.webp'

function BlogAndNews() {
    return (
        <Container className='BlogAndNews'>
            <SectionTitle
            SectionName={"BLOGE & NEWS"}
            SectionTitle={"Featured News And Insights"}
        />
            <Row>
                <Col lg={4} md={6} sm={12}>
                    <BlogAndNewsCard
                        cardPhoto={blogThumb2}
                        catigoryCard={"Uncategorized"}
                        date={"MARCH 14,2024"}
                        adminPhoto={blogProfile2}
                        adminName={"Admin"}
                        aboutAdmin={"Co,Founder"}
                    />
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <BlogAndNewsCard
                        cardPhoto={blogThumb3}
                        catigoryCard={"Technology"}
                        date={"MARCH 29,2024"}
                        adminPhoto={blogProfile3}
                        adminName={"Admin"}
                        aboutAdmin={"Co,Founder"}
                    />
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <BlogAndNewsCard
                        cardPhoto={blogThumb1}
                        catigoryCard={"Shared Hosting"}
                        date={"MARCH 24,2024"}
                        adminPhoto={blogProfile1}
                        adminName={"Admin"}
                        aboutAdmin={"Co,Founder"}
                    />
                </Col>
            </Row>
        
        </Container>
    )
}

export default BlogAndNews
