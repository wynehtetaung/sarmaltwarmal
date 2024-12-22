import { Col, Container, Row } from "react-bootstrap";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BreadCrumb from "../components/BreadCrumb";

import InfoBox from "../components/detail page/InfoBox";
import Comments from "../components/detail page/Comments";
import Reviews from "../components/detail page/Reviews";

const FoodDetail = () => {
  return (
    <div>
      <Navbar />
      <BreadCrumb />
      <div className="container" fluid>
        <div className="mt-5">
          <Row className="g-0">
            <Col xs={12} sm={6}>
              <img
                className="w-100"
                src="https://images.unsplash.com/photo-1473093226795-af9932fe5856?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGZvb2R8ZW58MHx8MHx8fDA%3D"
                alt=""
              />
            </Col>
            <Col className="my-auto">
              <div className="px-5 pt-3">
                <p className="fs-1 fw-semibold title1">YANGON TEE HOUSE</p>
                <p className="fs-6">Food :</p>
                <p className="fs-6">Location : </p>
                <p className="fs-6 fs-00">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
                  odio rerum maiores provident cumque non itaque, iusto nisi
                  quasi enim laboriosam dolore iste veniam omnis distinctio
                  vitae, aliquam debitis accusamus.
                </p>
                <p className="fs-000 fs-6 text-decoration-underline">
                  20 December, 2024
                </p>
              </div>
            </Col>
          </Row>
        </div>

        <Container className="mt-5">
          <Row>
            <Col xs={0} sm={1}></Col>
            <Col xs={12} sm={10}>
              {" "}
              <div>
                <Row className="g-0">
                  <Col xs={12} sm={6} className="my-auto">
                    <div>
                      <p className="fs-4 fw-medium fs-000">
                        The Header Testing
                      </p>
                      <p className="fs-6 lh-lg fs-00 pe-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Qui expedita, quisquam consectetur nulla aperiam
                        obcaecati praesentium molestias veritatis delectus, eum,
                        quis a ratione accusantium consequuntur. Omnis eligendi
                        nemo maxime aliquam?Lorem ipsum dolor delectus, eum,
                        quis a ratione accusantium consequuntur. Omnis eligendi
                        nemo maxime aliquam?Lorem ipsum dolor
                      </p>
                    </div>
                  </Col>
                  <Col xs={12} sm={6}>
                    <div>
                      <img
                        src="https://plus.unsplash.com/premium_photo-1675435644687-562e8042b9db?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FmZXxlbnwwfHwwfHx8MA%3D%3D"
                        alt=""
                        className="w-100"
                      />
                    </div>
                  </Col>
                </Row>
              </div>
              <div>
                <Row className="g-0 my-5">
                  <Col xs={12} sm={6}>
                    <div>
                      <img
                        src="https://images.unsplash.com/photo-1516197227520-4d1c419f6ec6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGNhZmV8ZW58MHx8MHx8fDA%3D"
                        alt=""
                        className="w-100"
                      />
                    </div>
                  </Col>
                  <Col xs={12} sm={6}>
                    <div className="px-3">
                      {" "}
                      <InfoBox />
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>

            <Col xs={0} sm={1}></Col>
          </Row>
        </Container>

        <Reviews />
        <Comments />
      </div>
      <Footer />
    </div>
  );
};
export default FoodDetail;
