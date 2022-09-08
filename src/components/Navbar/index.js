import React from "react";
import Container from "react-bootstrap/Container";
import logo from "./logo.svg";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const nav = () => {
  return (
    <>
      <Navbar bg="" variant="dark" expand="md">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Link className="nav-link" to="/">
              <img src={logo} className="logo" alt="logo" />
            </Link>
            <Nav className="ml-auto">
              <Link className="nav-link" to="/Todo">
                Todo
              </Link>
              <Link className="nav-link" to="/TheLight">
                The Light
              </Link>
              <Link className="nav-link" to="/PokemonInfo">
                Pokemon Info
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default nav;
{
  /*  <Navbar navbar-collapse bg="" variant="dark">
        <Container>
          <Nav>
            <Link className="nav-link" to="/">
              <img src={logo} className="logo" alt="logo" />
            </Link>
            <Link className="nav-link" to="/Todo">
              Todo
            </Link>
            <Link className="nav-link" to="/TheLight">
              The Light
            </Link>
            <Link className="nav-link" to="/PokemonInfo">
              Pokemon Info
            </Link>
          </Nav>
        </Container>
      </Navbar> */
}
