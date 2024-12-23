import React from "react";
import { Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import CommentDetail from "./CommentDetail";

const CommentItem = () => {
  const [modalShow, setModalShow] = React.useState(false);

  const comment_text = "the food is good, the service is fine...";
  return (
    <div>
      <Row>
        <Col xs={8}>
          <Form.Group className="">
            <Form.Control
              required
              type="text"
              as={"textarea"}
              rows={2}
              placeholder="Post Bio"
              value={comment_text}
              disabled
            />
          </Form.Group>
        </Col>
        <Col>
          <div>
            <Link className="text-success" onClick={() => setModalShow(true)}>
              <p className="fs-5">More Detail</p>
            </Link>
            <CommentDetail
              show={modalShow}
              comment_text={comment_text}
              onHide={() => setModalShow(false)}
            />
          </div>
        </Col>
        <Col xs={3}>
          <div className="text-center">
            <span>12:32 PM</span>
            <p>23 December,2024</p>
          </div>
        </Col>
        <hr />
      </Row>
    </div>
  );
};

export default CommentItem;
