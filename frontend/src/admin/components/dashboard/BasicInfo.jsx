import React from "react";
import { Col, Row } from "react-bootstrap";

const BasicInfo = () => {
  return (
    <div>
      <Row className="g-3 text-center">
        <Col>
          <div className="bg-success bg-opacity-50 rounded-3 shadow">
            <p className="fs-3">Users</p>
            <p className="fs-5 fw-bold">12</p>
          </div>
        </Col>
        <Col>
          <div className="bg-warning bg-opacity-50 shadow rounded-3">
            <p className="fs-3">Posts</p>
            <p className="fs-5 fw-bold">34</p>
          </div>
        </Col>
        <Col>
          <div className="bg-primary bg-opacity-50 shadow rounded-3">
            <p className="fs-3">Comments</p>
            <p className="fs-5 fw-bold">21</p>
          </div>
        </Col>
        <Col>
          <div className="bg-danger bg-opacity-50 shadow rounded-3">
            <p className="fs-3">Rating</p>
            <p className="fs-5 fw-bold">11</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default BasicInfo;
