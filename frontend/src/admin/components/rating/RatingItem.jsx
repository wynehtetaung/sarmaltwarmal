import React from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const RatingItem = () => {
  const deletingRating = () => {
    window.confirm("Are you sure to delete?");
  };
  return (
    <div>
      <Row>
        <Col xs={3} className="my-auto">
          <div className="fs-4 border border-2">
            <div>
              <FontAwesomeIcon icon={faStar} className="text-warning me-2" />
              <FontAwesomeIcon icon={faStar} className="text-warning me-2" />
              <FontAwesomeIcon icon={faStar} className="text-warning me-2" />
              <FontAwesomeIcon icon={faStar} className="text-warning me-2" />
              <FontAwesomeIcon icon={faStar} className="text-warning me-2" />
            </div>
          </div>
        </Col>
        <Col xs={3} className="my-auto">
          <div>
            <Link
              to={"/post_detail"}
              className="text-uppercase text-decoration-none text-dark"
            >
              <p className="fw-medium">The Post Title</p>
            </Link>
          </div>
        </Col>
        <Col xs={3} className="my-auto">
          <Row>
            <Col xs={4}>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                  className="bg-dark rounded-circle w-75"
                  alt=""
                />
              </div>
            </Col>
            <Col>
              <div className="mt-2">
                <h6>UserName</h6>
              </div>
            </Col>
          </Row>
        </Col>

        <Col>
          <div className="text-center fs-6">
            <span>12:32 PM</span>
            <p>23 December,2024</p>
          </div>
        </Col>
        <Col xs={1} className="my-auto">
          <Link className="text-decoration-none text-dark fs-5">
            {" "}
            <FontAwesomeIcon icon={faTrash} onClick={deletingRating} />
          </Link>
        </Col>
        <hr />
      </Row>
    </div>
  );
};

export default RatingItem;
