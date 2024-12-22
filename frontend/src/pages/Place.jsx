import { Container, Row } from "react-bootstrap";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PlaceCard from "../components/cards/PlaceCard";
import BreadCrumb from "../components/BreadCrumb";

const Place = () => {
  return (
    <div>
      <Navbar />
      <BreadCrumb />
      <Container>
        <div className="my-5">
          <p className="fs-6 text-end text-decoration-underline">
            There are 23 Place Items
          </p>
          <Row>
            <PlaceCard xs={3} />
            <PlaceCard xs={3} />
            <PlaceCard xs={3} />
            <PlaceCard xs={3} />
            <PlaceCard xs={3} />
            <PlaceCard xs={3} />
            <PlaceCard xs={3} />
            <PlaceCard xs={3} />
            <PlaceCard xs={3} />
            <PlaceCard xs={3} />
            <PlaceCard xs={3} />
            <PlaceCard xs={3} />
            <PlaceCard xs={3} />
            <PlaceCard xs={3} />
          </Row>
        </div>
      </Container>

      <Footer />
    </div>
  );
};
export default Place;
