/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { AuthCotext } from "../../../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const { user } = useContext(AuthCotext);
  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Link to="/">Home</Link>

              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="#pricing">Career</Nav.Link>
            </Nav>
            <Nav>
              {user && <FaUserCircle className="h2"></FaUserCircle>}

              {user ? (
                <button className="btn btn-secondary">Log Out</button>
              ) : (
                <Link to="/login">
                  <button className="btn btn-secondary">Login</button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
