import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

const MainMenu = () => {
  return (
    <Container className="sticky-top">
      <div className="fs-5 text-light text-center">
        <Link
          to={"/admin/dashboard"}
          className="fs-1 fw-semibold text-decoration-none text-light"
        >
          Admin
        </Link>
        <hr />
        <Link
          to={"/admin/dashboard"}
          className=" text-decoration-none text-light"
        >
          <Button variant="" className="px-4 w-100 bg-brown">
            Dashboard
          </Button>
        </Link>
        <hr />
        <div>
          <Dropdown data-bs-theme="dark">
            <Dropdown.Toggle
              variant="warning"
              id="dropdown-basic"
              className="w-100"
            >
              Collections
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href={"/admin/street_food"}>
                Street Food
              </Dropdown.Item>
              <Dropdown.Item href={"/admin/cafe_shop"}>Cafe Shop</Dropdown.Item>
              <Dropdown.Item href={"/admin/pagoda"}>Pagoda</Dropdown.Item>
              <Dropdown.Item href={"/admin/restaurant"}>
                Restaurant
              </Dropdown.Item>

              {/* <Dropdown.Item href={"/add_post"}>Add Post</Dropdown.Item> */}
            </Dropdown.Menu>
          </Dropdown>
        </div>
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
              <Dropdown.Item href={"/admin/add_post"}>Add Post</Dropdown.Item>
              <Dropdown.Item href={"/admin/post_list"}>Post List</Dropdown.Item>
              {/* <Dropdown.Item href={"/add_post"}>Add Post</Dropdown.Item> */}
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <hr />
        <Link to={"/admin/users"} className=" text-decoration-none text-light">
          <Button variant="primary" className="px-4 w-100">
            Users
          </Button>
        </Link>
        <hr />
        <Link
          to={"/admin/comments"}
          className=" text-decoration-none text-light"
        >
          <Button variant="secondary" className="px-4 w-100">
            Commments
          </Button>
        </Link>
        <hr />
        <Link
          to={"/admin/ratings"}
          className=" text-decoration-none text-light"
        >
          <Button variant="light" className="px-4 w-100">
            Rating
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
