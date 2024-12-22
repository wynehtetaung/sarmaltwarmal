import { Button, Container, Row } from "react-bootstrap";
import FoodCard from "../cards/FoodCard";

const FoodPost = () => {
  return (
    <div>
      <Container className=" fs-00">
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
export default FoodPost;
