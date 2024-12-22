import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FoodPost from "../components/list/FoodPost";
import TravelPost from "../components/list/TravelPost";
import AllPost from "../components/list/AllPost";
import { Button, Container, Row } from "react-bootstrap";

const List = () => {
  return (
    <div>
      <Navbar />

      <Container>
        <Row className="text-center">
          <div className="my-3">
            <Button variant="warning" className="rounded-pill px-4 me-3">
              All
            </Button>
            <Button variant="dark" className="rounded-pill px-4 me-3">
              Food
            </Button>
            <Button variant="dark" className="rounded-pill px-4">
              Place
            </Button>
          </div>
        </Row>
        <p className="fs-000 text-decoration-underline text-end mb-4">
          There are 45 items
        </p>
      </Container>
      <AllPost />
      <FoodPost />
      <TravelPost />
      <Footer />
    </div>
  );
};

export default List;
