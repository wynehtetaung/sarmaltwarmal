import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MainMenu from "../components/menu/MainMenu";
import CommentList from "../components/comment/CommentList";

const Comment = () => {
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
            <CommentList />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Comment;
