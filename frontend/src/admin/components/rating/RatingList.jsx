import React from "react";
import { Container } from "react-bootstrap";
import RatingItem from "./RatingItem";

const RatingList = () => {
  return (
    <div>
      <h1 className="text-decoration-underline my-3 text-uppercase">
        Rating List
      </h1>
      <p className="text-end text-decoration-underline fs-5">12 Items</p>
      <Container>
        <RatingItem />
        <RatingItem />
        <RatingItem />
        <RatingItem />
        <RatingItem />
      </Container>
    </div>
  );
};

export default RatingList;
