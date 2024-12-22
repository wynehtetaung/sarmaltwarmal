import React from "react";
import { Row, Col } from "react-bootstrap";

const AboutUs = () => {
  return (
    <div>
      <div className="my-4 bg-brown" fluid>
        <Row className="">
          <Col sm={7} xs={12} className="my-auto">
            <div className="mx-4 fs-00 text-center">
              <p className="fs-2 fw-medium title1">What are we?</p>
              <p className="fs-6">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
                error deserunt nostrum ratione laborum, fugiat fuga illum
                excepturi animi consequatur similique quaerat atque dolor illo
                odio sed minus adipisci. Doloribus!
              </p>
              <p className="fs-6">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
                error deserunt nostrum ratione laborum, fugiat fuga illum
                excepturi animi consequatur similique quaerat atque dolor illo
                odio sed minus adipisci. Doloribus!
              </p>
            </div>
          </Col>
          <Col sm={5}>
            <img
              src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZvb2R8ZW58MHwwfDB8fHww"
              alt=""
              className="w-100 "
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AboutUs;
