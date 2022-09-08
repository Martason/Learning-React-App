import React from "react";
import Container from "react-bootstrap/Container";
import logo from "./logo.svg";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
//<img src={logo} className="logo" alt="logo" />;

const nav = () => {
  return (
    <>
      <Navbar bg="" variant="dark">
        <Container>
          <Nav>
            <Link classname="nav-link" to="/">
              <img src={logo} className="logo" alt="logo" />
            </Link>
            <Link className="nav-link" to="/Todo">
              Todo
            </Link>
            <Link className="nav-link" to="/TheLight">
              The Light
            </Link>
            <Link className="nav-link" to="/About">
              About
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default nav;
