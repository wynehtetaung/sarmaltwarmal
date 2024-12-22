import { Button, Col, Container, Row } from "react-bootstrap";
import PlaceCard from "../cards/PlaceCard";
import FoodCard from "../cards/FoodCard";

const EditorChoice = () => {
  return (
    <div className="bg-warning bg-opacity-25">
      <Container className="my-5 pb-5">
        <p className="fs-2 pt-5 pb-3 text-center title1">Editor's Choices </p>

        <Row>
          <Col className="text-center mb-3" sm={3} xs={12}>
            <div className="px-3">
              <p className="fs-5 fs-000">The Header Title</p>
              <p className="fs-6 fs-00 lh-base">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Delectus nemo voluptatibus facilis tempora sunt ipsum ex
                laboriosam fugit! Ab, esse quas dolorem doloribus molestias
                laudantium explicabo consequuntur error sunt ipsam!
              </p>
              <Button
                variant="dark"
                size="lg"
                className="rounded-pill fs-000 fs-6"
                href="/collections"
              >
                Explore More
              </Button>
            </div>
          </Col>

          <FoodCard sm={3} xs={6} />
          <FoodCard sm={3} xs={6} />
          <PlaceCard sm={3} xs={12} />
        </Row>
      </Container>
    </div>
  );
};
export default EditorChoice;
