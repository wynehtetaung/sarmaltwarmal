import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FoodPost from "../components/list/FoodPost";
import TravelPost from "../components/list/TravelPost";
import AllPost from "../components/list/AllPost";
import { Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const List = () => {
  return (
    <div>
      <Navbar />

      <Container>
        <Row className="text-center">
          <div className="my-3">
            <Link to={"/list"}>
              <Button variant="warning" className="rounded-pill px-4 me-3">
                All
              </Button>
            </Link>
            <Link to={"/list/food"}>
              <Button variant="dark" className="rounded-pill px-4 me-3">
                Food
              </Button>
            </Link>
            <Link to={"/list/place"}>
              <Button variant="dark" className="rounded-pill px-4 me-3">
                Place
              </Button>
            </Link>
          </div>
        </Row>
        <p className="fs-000 text-decoration-underline text-end mb-4">
          There are 45 items
        </p>
      </Container>
      <AllPost />

      <Footer />
    </div>
  );
};

export default List;
