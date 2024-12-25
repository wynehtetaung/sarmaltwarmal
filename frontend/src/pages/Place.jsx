import { Button, Container, Row } from "react-bootstrap";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TravelPost from "../components/list/TravelPost";
import { Link } from "react-router-dom";

const Place = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Row className="text-center">
          <div className="my-3">
            <Link to={"/list"}>
              <Button variant="dark" className="rounded-pill px-4 me-3">
                All
              </Button>
            </Link>
            <Link to={"/list/food"}>
              <Button variant="dark" className="rounded-pill px-4 me-3">
                Food
              </Button>
            </Link>
            <Link to={"/list/place"}>
              <Button variant="warning" className="rounded-pill px-4 me-3">
                Place
              </Button>
            </Link>
          </div>
        </Row>
        <p className="fs-000 text-decoration-underline text-end mb-4">
          There are 45 items
        </p>
      </Container>
      <TravelPost />
      <Footer />
    </div>
  );
};
export default Place;
