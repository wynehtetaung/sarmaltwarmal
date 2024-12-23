import React from "react";

import { Col, Container, Row } from "react-bootstrap";
import MainMenu from "../menu/MainMenu";
import CardItem from "../card/CardItem";

const PostList = () => {
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
            <h1 className="my-3 text-decoration-underline">ALL POST LIST</h1>
            <div className="fs-4 text-center">
              <input type="radio" name="postType" className="me-2" size="lg" />
              <label htmlFor="postType" className="me-5">
                Food
              </label>
              <input type="radio" name="postType" className="me-2" />
              <label htmlFor="postType">Place</label>
            </div>
            <p className="my-3 fs-5 text-end text-decoration-underline">
              123 items
            </p>

            <Row>
              <CardItem xs={3} />
              <CardItem xs={3} />
              <CardItem xs={3} />
              <CardItem xs={3} />
              <CardItem xs={3} />
              <CardItem xs={3} />
              <CardItem xs={3} />
              <CardItem xs={3} />
              <CardItem xs={3} />
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PostList;
