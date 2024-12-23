import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardItem = ({ sm, xs }) => {
  return (
    <Col xs={xs} sm={sm}>
      <Link to={"/food_detail"} className="text-decoration-none">
        <div>
          <img
            src="https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?w=600&auto=format&fit=crop&q=60&
          ixlib =rb-4.0.3& ixid =M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb2R8ZW58MHx8MHx8fDA%3D"
            alt=""
            className="w-100"
          />
          <div className="text-center text-dark mb-3">
            <span className="fs-7 mt-1 fs-000">19 Decemober, 2024</span>
            <span className="fs-6 fs-00 d-block">Yangon Tee House</span>
          </div>
        </div>
      </Link>
    </Col>
  );
};
export default CardItem;
