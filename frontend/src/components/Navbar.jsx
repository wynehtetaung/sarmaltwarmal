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
            <Nav.Link active href="/" className="me-3">
              Home
            </Nav.Link>
            <Nav.Link href="/food" className="me-3">
              Foods
            </Nav.Link>
            <Nav.Link href="/place" className="me-3">
              Places
            </Nav.Link>
            <Nav.Link href="/food_detail" className="me-3">
              FoodDetail
            </Nav.Link>
            <Nav.Link href="/place_detail" className="me-3">
              PlaceDetail
            </Nav.Link>
            <Nav.Link href="/collections" className="me-3">
              Collections
            </Nav.Link>
            <Nav.Link href="/search" className="me-3">
              Search
            </Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            {/* <Form.Control
              type="search"
              placeholder="Login"
              className="rounded-pill"
              aria-label="Search"
              size="lg"

            /> */}

            {/* <Button
              onClick={() => setModalShow(true)}
              icon={faUser}
              variant="dark"
              className="bg-opacity-25 rounded-pill px-3 me-3"
            >
              Login
            </Button> */}

            {/* <Login show={modalShow} onHide={() => setModalShow(false)} /> */}

            <Link to={"/profile"}>
              <FontAwesomeIcon
                icon={faUser}
                className="fs-3 text-dark mt-1 me-4 text-decoration-none"
              />
            </Link>

            <Link to={"/search"}>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="fs-3 text-dark opacity-75 mt-1 me-3 text-decoration-none"
              />
            </Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NNavbar;
