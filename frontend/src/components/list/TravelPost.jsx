import { Button, Container, Row } from "react-bootstrap";
import PlaceCard from "../cards/PlaceCard";

const TravelPost = () => {
  return (
    <div>
      <Container className="fs-00">
        <Row>
          <PlaceCard xs={6} sm={3} />
          <PlaceCard xs={6} sm={3} />
          <PlaceCard xs={6} sm={3} />
          <PlaceCard xs={6} sm={3} />
        </Row>
      </Container>
    </div>
  );
};
export default TravelPost;
