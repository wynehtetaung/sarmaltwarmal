import React from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Password2 = () => {
  const [password, setPassword] = React.useState("");

  return (
    <div className="bg-brown min-vh-100 pt-5">
      <Container>
        <div className="pt-5">
          <Row className="w-25 mx-auto pt-5">
            <Form>
              <Form.Group
                className="mb-3"
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
              <div className="text-center">
                <Link to={"/dashboard"}>
                  <Button variant="warning" className=" px-5">
                    Login
                  </Button>
                </Link>
              </div>
            </Form>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Password2;
