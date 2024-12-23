import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CommentItem from "./CommentItem";

const CommentList = () => {
  return (
    <div>
      <Container>
        <h1 className="text-decoration-underline my-3">Comment List</h1>
        <p className="fs-5 text-end text-decoration-underline">23 comments</p>
        <hr />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
      </Container>
    </div>
  );
};

export default CommentList;
