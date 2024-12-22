import { Button, Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <>
      <div fluid>
        <Row className="my-3">
          <Col xs={12} sm={6}>
            <div>
              <img
                src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZvb2R8ZW58MHx8MHx8fDA%3D"
                alt=""
                className="w-100 "
              />
            </div>
          </Col>
          <Col xs={12} sm={6}>
            <div className="px-5">
              <div className="pt-3 text-center">
                <p className="fs-1 fw-semibold brand text-warning">
                  SarMalTwarMal
                </p>
                <p className="fs-5 fs-00">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Labore odit optio eveniet aliquid facere non in alias adipisci
                  fugiat, unde possimus! Unde aliquam optio nesciunt debitis
                  voluptates, voluptatibus minima nulla.
                </p>
                <Link to={"/list"}>
                  <Button
                    variant="outline-dark"
                    className="rounded-pill fs-6 px-5 py-3 fs-00 border-2"
                  >
                    See Them All
                  </Button>
                </Link>
              </div>
            </div>
          </Col>

          {/* <Col>
            <div>
            https://wallpapers.com/images/high/food-4k-b6ytxiu9nhr4w4p7.webp
              <img
                src="https://wallpapers.com/images/high/food-4k-jx0j7rqea6yv9phh.webp"
                alt=""
                className="w-100 opacity-75"
              />
            </div>
          </Col> */}
        </Row>
      </div>
    </>
  );
}

export default Banner;
