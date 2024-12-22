import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MainMenu from "../components/menu/MainMenu";

const Post = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col xs={2} className="bg-dark">
            <div className="min vh-100">
              {" "}
              <MainMenu />
            </div>
          </Col>
          <Col xs={10}>
            <h1>this is post section</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Post;
