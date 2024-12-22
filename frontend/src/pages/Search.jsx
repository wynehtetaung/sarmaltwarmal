import { Container, Form, Row, Col,Button } from "react-bootstrap";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import BreadCrumb from "../components/BreadCrumb";
import Before from "../components/search/Before";
import After from "../components/search/After";

const Search = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />

      <BreadCrumb />

      <Container>
        <div className="my-3">
          <Row>
            <Col xs={6} className="mx-auto">
              <div>
                <Form.Control
                  type="text"
                  id="search"
                  aria-describedby="passwordHelpBlock"
                  placeholder="Search your food or place"
                  size="lg"
                  className="rounded-pill border-2 border-dark p-3"
                />
              </div>
             
            </Col>
          </Row>
        </div>
      </Container>

      {/* Before Search */}
      <Before/>
      {/* Before Search */}

      {/* After Search */}
      {/* <After/> */}
      {/* After Search */}

      <Footer />
    </div>
  );
};
export default Search;
