import { Container, Row, Button } from "react-bootstrap";

import FoodCard from "../cards/FoodCard";
import React from "react";

const Before = () => {
  return (
    <div>
      <Container>
        <hr />

        <div className="mb-5">
          <p className="fs-5">Recent Searches : </p>
          <Button variant="warning" className="rounded-pill me-3" size="lg">
            Street Food
          </Button>
          <Button variant="warning" className="rounded-pill me-3" size="lg">
            Cafe Shop
          </Button>
          <Button variant="warning" className="rounded-pill me-3" size="lg">
            Restaurant
          </Button>
          <Button variant="warning" className="rounded-pill me-3" size="lg">
            Pagodas
          </Button>
        </div>
        <hr />
        <div className="mb-5">
          <p className="fs-3 fw-medium">Top Picks For You</p>

          <Row>
            <FoodCard xs={3} />
            <FoodCard xs={3} />
            <FoodCard xs={3} />
            <FoodCard xs={3} />
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Before;
