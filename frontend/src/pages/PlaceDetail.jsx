import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Col, Container, Row } from "react-bootstrap";
import Reviews from "../components/detail page/Reviews";
import Comments from "../components/detail page/Comments";
import InfoBox from "../components/detail page/InfoBox";

const PlaceDetail = () => {
  return (
    <div>
      <Navbar />
      <BreadCrumb />

      <Container fluid>
        <Row>
          <Col>
            <div className="my-3 position-relative">
              <img
                src="https://plus.unsplash.com/premium_photo-1681558921634-f73645bde42f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBhcmt8ZW58MHx8MHx8fDA%3D"
                alt=""
                className="w-100"
              />
              <div className="position-absolute top-50 start-50 translate-middle">
                <p className="fs-1 fw-bold text-warning text-center title1 text-uppercase">
                  royal lake park
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <Container className="my-2">
          <Row className="g-0">
            <Col>
              <div>
                <p className="fs-000 fs-6 text-decoration-underline">
                  20 December, 2024
                </p>
                <p className="fs-5 lh-base fs-00">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore perspiciatis nemo enim quod natus excepturi ipsa? Ullam
                  cupiditate corrupti quidem in quos pariatur, dolorum rem
                  exercitationem laudantium possimus nobis ad. Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Dolore perspiciatis
                  nemo enim quod natus excepturi ipsa? Ullam cupiditate corrupti
                  quidem in quos pariatur, dolorum rem exercitationem laudantium
                  possimus nobis ad.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col xs={0} sm={1}></Col>
            <Col xs={12} sm={10}>
              <div>
                <Row className="g-0">
                  <Col xs={12} sm={6}>
                    <div>
                      <img
                        src="https://images.unsplash.com/photo-1422257986712-4f02edc298ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHBhcmt8ZW58MHx8MHx8fDA%3D"
                        alt=""
                        className="w-100"
                      />
                    </div>
                  </Col>
                  <Col xs={12} sm={6} className="my-auto">
                    <div className="p-3">
                      <p className="fs-4 fw-medium fs-000">
                        The Header Testing
                      </p>
                      <p className="fs-6 lh-lg fs-00">
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
                </Row>
              </div>
              <div className="my-5">
                <Row className="g-0">
                  <Col xs={12} sm={6}>
                    <div>
                      <img
                        src="https://plus.unsplash.com/premium_photo-1698009975424-b2bc9c420efe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHBhcmt8ZW58MHx8MHx8fDA%3D"
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
      </Container>

      <Footer />
    </div>
  );
};

export default PlaceDetail;
