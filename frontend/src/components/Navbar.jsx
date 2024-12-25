import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const NNavbar = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Navbar expand="xl" sticky="top" bg="light" data-bs-theme="light">
      <Container fluid>
        <Navbar.Brand href="/">
          <h1 className="brand">SMTM</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="fs-00">
          <Nav
            className=" mx-auto my2 my-lg-3"
            style={{ maxHeight: "150px" }}
            navbarScroll
          >
            <Nav.Link href="/home" className="me-3">
              Home
            </Nav.Link>

            <Nav.Link href="/list/food" className="me-3">
              Foods
            </Nav.Link>
            <Nav.Link href="/list/place" className="me-3">
              Places
            </Nav.Link>
            <Nav.Link href="/food_detail" className="me-3">
              FoodDetail
            </Nav.Link>
            <Nav.Link href="/place_detail" className="me-3">
              PlaceDetail
            </Nav.Link>

            {/* <Nav.Link href="/search" className="me-3">
              Search
            </Nav.Link> */}
          </Nav>
          <Form className="d-flex">
            <Link className="me-5" to={"/profile"}>
              <img
                src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                alt=""
                className="rounded-circle text-end"
                style={{ width: "45px" }}
              />
            </Link>

            <Link to={"/search"}>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="fs-3 text-dark opacity-75 mt-2 text-decoration-none"
              />
            </Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NNavbar;
