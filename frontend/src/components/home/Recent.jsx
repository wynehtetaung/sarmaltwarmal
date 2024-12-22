import FoodCard from "../cards/FoodCard";
import PlaceCard from "../cards/PlaceCard";
import { Container, Row } from "react-bootstrap";
const Recent = () => {
  return (
    <div>
      <Container>
        <p className="fs-2 pt-3  text-center title1">What's news? </p>
        <Row className="pt-3">
          <FoodCard xs={6} sm={3} />
          <FoodCard xs={6} sm={3} />
          <FoodCard xs={6} sm={3} />
          <FoodCard xs={6} sm={3} />
        </Row>
      </Container>
    </div>
  );
};
export default Recent;
