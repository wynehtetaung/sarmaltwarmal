import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

const MainMenu = () => {
  return (
    <Container>
      <div className="fs-5 text-light text-center">
        <Link
          to={"/dashboard"}
          className="fs-1 fw-semibold text-decoration-none text-light"
        >
          Admin
        </Link>
        <hr />
        <Link to={"/dashboard"} className=" text-decoration-none text-light">
          <Button variant="warning" className="px-4 w-100">
            Dashboard
          </Button>
        </Link>
        <hr />
        <div>
          <Dropdown data-bs-theme="dark">
            <Dropdown.Toggle
              variant="success"
              id="dropdown-basic"
              className="w-100"
            >
              Posts
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href={"/add_post"}>Add Post</Dropdown.Item>
              <Dropdown.Item href={"/post_list"}>Post List</Dropdown.Item>
              {/* <Dropdown.Item href={"/add_post"}>Add Post</Dropdown.Item> */}
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <hr />
        <Link to={"/users"} className=" text-decoration-none text-light">
          <Button variant="primary" className="px-4 w-100">
            Users
          </Button>
        </Link>
        <hr />
        <Link to={"/comments"} className=" text-decoration-none text-light">
          <Button variant="secondary" className="px-4 w-100">
            Commments
          </Button>
        </Link>
        <hr />
        <Link to={"/ratings"} className=" text-decoration-none text-light">
          <Button variant="light" className="px-4 w-100">
            Posts
          </Button>
        </Link>
        <hr />
        <Link to={"/sign_out"} className=" text-decoration-none text-light">
          <Button variant="danger" className="px-4">
            Sign Out
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default MainMenu;
