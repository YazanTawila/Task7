import React from 'react'
import './NavBar2.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo1 from './../../assets/images/logo.svg'
import { Link } from 'react-router-dom';

function NavBar2() {
    return (
            <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            <Navbar.Brand href="#home"><img src={logo1} alt="" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="me-auto">
            <div className='NavBar2-Links'>
                <Link to={'/'}>Home</Link>
                <Link to={'/about'}>About</Link>
                <Link >Services</Link>
                <Link >Pages</Link>
                <Link >Blog</Link>
                <Link to={'/contact'}>Contact</Link>
            </div>
                
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default NavBar2
