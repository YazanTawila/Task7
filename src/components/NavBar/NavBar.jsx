import './NavBar.css'
import React from 'react'
import logo1 from './../../assets/images/logo.svg'
import { Col, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';



export default function NavBar() {
    return (
            <Navbar expand="lg" className="navbar1">
            <Container className=''>
                <Navbar.Brand href="#home"><img src={logo1} alt="" /></Navbar.Brand>
                <div className='Home-NavBar-Content'>
                    <div className='Home-NavBar-icons'>
                        <CiSearch />
                        <FaShoppingCart />
                    </div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='navbar-collapse1'>
                    <Nav className="me-auto">
                        <div className='Home-NavBar-Links'>
                            <Link to={'/'}>Home</Link>
                            <Link to={'/about'}>About</Link>
                            <Link >Services</Link>
                            <Link >Pages</Link>
                            <Link >Blog</Link>
                            <Link to={'/contact'}>Contact</Link>
                        </div>
                    </Nav>
                    </Navbar.Collapse>
                </div>
            </Container>
        </Navbar>
    
    )
}
