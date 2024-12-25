import React from "react";
import MainMenu from "../../components/menu/MainMenu";
import { Col, Container, Row } from "react-bootstrap";

const Restaurant = () => {
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
            <h1>this is restraurant</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Restaurant;
