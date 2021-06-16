import React from "react";
import {Link} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';


const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} href="#home">Google Book Search</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/saved" className={window.location.pathname === "/saved" }>Saved</Nav.Link>
            <Nav.Link as={Link} to="/search" className={window.location.pathname === "/search"} >Search</Nav.Link>
          </Nav>
          <Nav></Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
};

export default NavBar;
