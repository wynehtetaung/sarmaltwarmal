import { Container, Row } from "react-bootstrap";

import PlaceCard from "../cards/PlaceCard";
import FoodCard from "../cards/FoodCard";
import React from "react";

const After = () => {
  return (
    <div>
      <Container className="mb-5">
        <div className="text-center my-4">
          <hr />
          <p className="text-decoration-underline">Showing 12 results for</p>
          <span className="fs-2 fw-semibold">Steet Food</span>
          <hr />
        </div>
        <Row>
          <PlaceCard xs={3} />
          <FoodCard xs={3} />
          <PlaceCard xs={3} />
          <FoodCard xs={3} />
          <PlaceCard xs={3} />
          <FoodCard xs={3} />
          <PlaceCard xs={3} />
        </Row>
      </Container>
    </div>
  );
};

export default After;
