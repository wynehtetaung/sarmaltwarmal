import { Button, Col, Container, Row } from "react-bootstrap";
import PlaceCard from "../cards/PlaceCard";
import FoodCard from "../cards/FoodCard";

const RatingItem = () => {
  return (
    <div className="bg-brown">
      <Container fluid className="my-5 pb-3">
        <p className="fs-2 py-3 text-center title1">Top Ratings Items</p>

        <Row className="g-3">
          <Col className="text-center mb-3" sm={3} xs={12}>
            <div className="px-3">
              <p className="fs-5 fs-000">Fans' Favorite</p>
              <p className="fs-6 fs-00 ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Delectus nemo voluptatibus facilis tempora sunt ipsum ex
                laboriosam fugit! Ab,
              </p>
              <Button
                variant="dark"
                size="lg"
                className="rounded-pill fs-000 fs-6"
                href="/list"
              >
                Explore More
              </Button>
            </div>
          </Col>

          <FoodCard sm={2} xs={6} />
          <FoodCard sm={2} xs={6} />
          <FoodCard sm={2} xs={6} />
          <FoodCard sm={2} xs={6} />
        </Row>
      </Container>
    </div>
  );
};
export default RatingItem;
