import React from "react";
import Container from "react-bootstrap/Container";
import logo from "./logo.svg";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
//<img src={logo} className="logo" alt="logo" />;

const nav = () => {
  return (
    <>
      <Navbar bg="" variant="dark">
        <Container>
          <Navbar.Brand href="/Home">
            <img src={logo} className="logo" alt="logo" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/Todo">Todo</Nav.Link>
            <Nav.Link href="/TheLight">The Light</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default nav;
