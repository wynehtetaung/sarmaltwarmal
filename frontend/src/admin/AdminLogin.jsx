import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const AdminLogin = () => {
  const [username, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <div className="bg-brown">
      <Container>
        <div>
          <Row className="min-vh-100 justify-content-center align-items-center">
            <Col></Col>
            <Col>
              <Form>
                <Form.Group
                  className="mb-2"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    className="shadow"
                    onChange={(e) => {
                      setUserName(e.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-2"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    className="shadow"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </Form.Group>
              </Form>
              <div className="text-center">
                <Link to={"/password2"}>
                  <Button variant="warning" className="mt-2 px-5">
                    Next
                  </Button>
                </Link>
              </div>
            </Col>
            <Col></Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default AdminLogin;
