import React from "react";

import { Col, Row } from "react-bootstrap";
import Profile from "./Profile";
import CommentNoti from "./CommentNoti";

const Head = () => {
  return (
    <div>
      <Row className="py-3 bg-secondary mb-3">
        <div>
          <Row>
            <Col xs={8}></Col>
            <Col xs={4}>
              <div className="d-flex justify-content-end">
                <CommentNoti />
                <Profile />
              </div>
            </Col>
          </Row>
        </div>
      </Row>
    </div>
  );
};

export default Head;
