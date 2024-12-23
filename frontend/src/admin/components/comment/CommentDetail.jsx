import React from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "../../../components/cards/FoodCard";

const CommentDetail = (props) => {
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Post Title Here
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="fs-5 fw-medium">{props.comment_text}</p>
          <hr />
          <div>
            <Row>
              <Col xs={9}>
                <Row>
                  <Col xs={3}>
                    <div>
                      <img
                        src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                        className="bg-dark rounded-circle w-100"
                        alt=""
                      />
                    </div>
                  </Col>
                  <Col>
                    <div className="m-3">
                      <h4>UserName</h4>
                      <p>
                        Email : <span>sample@gmail.com</span>
                      </p>
                      <p>
                        Login Date :{" "}
                        <span className="fw-medium">23 December, 2024</span>
                      </p>
                      <p>
                        Commented : <span>23 December, 2024</span>{" "}
                        <span>12:40 PM </span>
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col xs={3}>
                <Card />
              </Col>
            </Row>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} variant="danger">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CommentDetail;
