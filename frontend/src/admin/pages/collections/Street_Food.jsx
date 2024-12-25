import React from "react";
import MainMenu from "../../components/menu/MainMenu";
import { Col, Container, Row } from "react-bootstrap";

const Street_Food = () => {
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
            <h1>this is street food</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Street_Food;
