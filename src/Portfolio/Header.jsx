import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./css/Header.css"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Header() {

  const handleScrollToSection = (sectionId) => {
    // 点击后滚动到指定的部分
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};

    return (
        <>
          <Navbar bg="dark" data-bs-theme="dark">
            <Container>
              <Navbar.Brand as={Link} to={"/"}>Max'Portfolio</Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />  
              {/* <Navbar.Collapse id="basic-navbar-nav">  */}
                <Nav className="nav-auto">
   
                    <Nav.Link as={Link} to="/">Main</Nav.Link>
                    <Nav.Link as={Link} to="/" onClick={() => handleScrollToSection("about-section")}>About</Nav.Link>
                    <Nav.Link as={Link} to="/" onClick={() => handleScrollToSection("projec-list-section")}>Project</Nav.Link>
                    <Nav.Link as={Link} to="/" onClick={() => handleScrollToSection("contact-section")}>Contact</Nav.Link>
                </Nav>
              {/* </Navbar.Collapse> */}
            </Container>
          </Navbar>
        </>
      );
    }

export default Header
