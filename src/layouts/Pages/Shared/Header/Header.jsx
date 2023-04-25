/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../../../../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Container>
        <div className="text-center mt-2">
        <img src={logo} alt="" />
        <p>Journalism without fear or nofear</p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div className=" d-flex">
        <button className="btn btn-danger">Latest</button>
        <Marquee className="text-danger">
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>

        
      </div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Career</Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Profile</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <button className="btn btn-secondary">Login</button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Container>
  );
};

export default Header;
