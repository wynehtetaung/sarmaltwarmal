import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { First, Last } from "react-bootstrap/esm/PageItem";

const ContactUs = () => {
  return (
    <div>
      <Container>
        <p className="fs-2 text-center mb-5 title1">Get In Touch</p>
        <Row className="mx-auto">
          <Col xs={{ order: 5 }} sm={12} lg={6}>
            <img
              src="https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb2R8ZW58MHx8MHx8fDA%3D"
              alt="contact us img"
              className="w-100 shadow mb-3"
            />
          </Col>
          <Col xs={{ order: 0 }} sm={12} lg={6}>
            <div className="w-75 mx-auto my-4 fs-00">
              <Form>
                <Form.Group
                  className="mb-4"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your Name"
                    size="lg"
                    className="fs-6"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-4"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your Email"
                    size="lg"
                    className="fs-6"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-4"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Enter your message"
                    size="lg"
                    className="fs-6"
                  />
                </Form.Group>
              </Form>
              <Button className="fs-6" variant="dark" size="lg">
                Send Message
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default ContactUs;
