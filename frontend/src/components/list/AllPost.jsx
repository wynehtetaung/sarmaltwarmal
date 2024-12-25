import React from "react";
import { Container, Row } from "react-bootstrap";
import Card from "../cards/FoodCard";

const AllPost = () => {
  return (
    <div>
      <Container>
        <Row>
          <Card xs={6} sm={3} />
          <Card xs={6} sm={3} />
          <Card xs={6} sm={3} />
          <Card xs={6} sm={3} />
          <Card xs={6} sm={3} />
          <Card xs={6} sm={3} />
          <Card xs={6} sm={3} />
          <Card xs={6} sm={3} />
          <Card xs={6} sm={3} />
        </Row>
      </Container>
    </div>
  );
};

export default AllPost;
