import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Restaurants = () => {
  return (
    <div>
      <div fluid className="mt-2 mb-5 bg-brown">
        <Row className="g-0">
          <Col xs={12} sm={6} className="my-auto">
            <div className="text-center mt-3 px-3">
              <p className="fs-2 title1">Restaurants Collections</p>
              <p className="fs-6 fs-00">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
                reprehenderit autem repudiandae? Reiciendis, enim id quia iste
                nihil atque debitis. Ex quos enim maxime eligendi voluptates qui
                nisi non sit.
              </p>
              <Link to={"restaurant"} className="text-decoration-none">
                <p className="text-center fs-6 fs-00 text-success ">
                  Explore More
                </p>
              </Link>
            </div>
          </Col>
          <Col xs={12} sm={6}>
            <div>
              <img
                src="https://images.unsplash.com/photo-1505275350441-83dcda8eeef5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D"
                alt=""
                className="w-100"
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default Restaurants;
