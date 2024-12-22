import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="fs-00">
      <Container fluid className="bg-dark text-light p-5">
        <Row className="text-center g-0">
          <Col xs={12} sm={3}>
            <div>
              <p className="fs-2 fw-medium brand">SarMalTwarMal</p>
              <p className="fs-6 fs-00">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                recusandae laborum tempora beatae quidem minus neque odit et
                illum, saepe ipsam.
              </p>
            </div>
          </Col>
          <Col xs={12} sm={3}>
            <div>
              <p className="fs-6 fw-medium fs-000">Food</p>
              <p>food item1</p>
              <p>food item2</p>
              <p>food item3</p>
            </div>
          </Col>
          <Col xs={12} sm={3}>
            <div>
              <p className="fs-6 fw-medium fs-000">Place</p>
              <p>food item1</p>
              <p>food item2</p>
              <p>food item3</p>
            </div>{" "}
          </Col>
          <Col xs={12} sm={3}>
            <div>
              <p className="fs-6 fw-medium fs-000">Collections</p>
              <p>food item1</p>
              <p>food item2</p>
              <p>food item3</p>
            </div>{" "}
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
