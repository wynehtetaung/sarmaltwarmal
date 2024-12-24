import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MainMenu from "../components/menu/MainMenu";
import RatingList from "../components/rating/RatingList";

const Rating = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col xs={2} className="bg-dark">
            <div className="min vh-100 sticky-top">
              {" "}
              <MainMenu />
            </div>
          </Col>
          <Col xs={10}>
            <RatingList />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Rating;
