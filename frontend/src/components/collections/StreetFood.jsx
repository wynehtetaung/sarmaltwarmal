import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const StreetFood = () => {
  return (
    <div fluid className="bg-brown">
      <Row className="text-center g-0">
        <Col xs={12} sm={6}>
          <div className="">
            <img
              src="https://plus.unsplash.com/premium_photo-1699555728731-70a9bf22526a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHN0cmVldCUyMGZvb2R8ZW58MHx8MHx8fDA%3D"
              alt=""
              className="w-100"
            />
          </div>
        </Col>
        <Col xs={12} sm={6} className="my-auto">
          <div className="mt-4 px-2">
            <p className="fs-1 mt-2 title1">Street Food</p>

            <p className="fs-6 fs-00">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
              esse inventore labore error tempore non totam, odit minus rem fuga
              fugiat quas. Adipisci fuga voluptas libero perspiciatis corporis
              suscipit aspernatur.
            </p>
            <Link to={"street_food"} className="text-decoration-none">
              <p className="text-center fs-6 fs-00 text-success ">
                Explore More
              </p>
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default StreetFood;
