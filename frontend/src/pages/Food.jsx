import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FoodCard from "../components/cards/FoodCard";
import { Container, Row } from "react-bootstrap";
import BreadCrumb from "../components/BreadCrumb";

const Food = () => {
  return (
    <div>
      <Navbar />
      <BreadCrumb />
      <Container>
        <div className="my-5">
          <p className="text-end  text-decoration-underline">
            There are 21 Food Items
          </p>
          <Row>
            <FoodCard xs={3} />
            <FoodCard xs={3} />
            <FoodCard xs={3} />
            <FoodCard xs={3} />
            <FoodCard xs={3} />
            <FoodCard xs={3} />
            <FoodCard xs={3} />
            <FoodCard xs={3} />
            <FoodCard xs={3} />
            <FoodCard xs={3} />
          </Row>
        </div>
      </Container>

      <Footer />
    </div>
  );
};
export default Food;
