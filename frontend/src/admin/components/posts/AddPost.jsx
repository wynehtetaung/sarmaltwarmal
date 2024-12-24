import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import MainMenu from "../menu/MainMenu";
import Form from "react-bootstrap/Form";

const AddPost = () => {
  // for img uploading
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  // for img uploading
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
            <h1 className="text-decoration-underline my-3">
              NEW POST UNPLOADING
            </h1>
            <Container>
              <Form>
                <Row>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Post Type</Form.Label>
                      <div className="fs-4">
                        <input
                          type="radio"
                          name="postType"
                          className="me-2"
                          size="lg"
                        />
                        <label htmlFor="postType" className="me-5">
                          Food
                        </label>
                        <input type="radio" name="postType" className="me-2" />
                        <label htmlFor="postType">Place</label>
                      </div>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Enter the Post Title</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Post Title"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Enter the Bio(50 words)</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        as={"textarea"}
                        rows={3}
                        placeholder="Post Bio"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Upload Main Img(1:1)</Form.Label>
                      <Form.Control
                        required
                        type="file"
                        onChange={handleChange}
                      />
                      <img src={file} alt="" className="w-25" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Enter the Detail(150 words)</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        as={"textarea"}
                        rows={4}
                        placeholder="Post Detail"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Upload Second Img(1:2)</Form.Label>
                      <Form.Control
                        required
                        type="file"
                        onChange={handleChange}
                      />
                      <img src={file} alt="" className="w-25" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Upload Third Img(1:2)</Form.Label>
                      <Form.Control
                        required
                        type="file"
                        onChange={handleChange}
                      />
                      <img src={file} alt="" className="w-25" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <h3>Location and Contact</h3>
                    <Form.Group className="mb-3">
                      <Form.Label>Enter the Map Detail</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        as={"textarea"}
                        rows={4}
                        placeholder="Map Detail"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Enter the Phone No:</Form.Label>
                      <Form.Control
                        required
                        type="number"
                        placeholder="Phone Number"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Enter the Email:</Form.Label>
                      <Form.Control required type="email" placeholder="Email" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Enter the Opening Hour:</Form.Label>
                      <div className="d-flex">
                        <Form.Control required type="time" />
                        <Form.Control required type="time" />
                      </div>
                    </Form.Group>
                  </Col>
                </Row>
                <Button variant="warning" className="w-100 mb-5">
                  Add
                </Button>
              </Form>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddPost;
