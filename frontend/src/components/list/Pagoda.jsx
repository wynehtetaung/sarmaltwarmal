import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Col, Container, Row } from "react-bootstrap";
import Card from "../cards/FoodCard";

const Pagoda = () => {
  return (
    <div>
      <Navbar />
      <div fluid className="my-2">
        <Row className="g-0 bg-brown">
          <Col xs={12} sm={6} className="my-auto">
            <div className="text-center mt-3 px-3">
              <p className="fs-2 title1">Pagodas Collections</p>
              <p className="fs-6 fs-00">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
                reprehenderit autem repudiandae? Reiciendis, enim id quia iste
                nihil atque debitis. Ex quos enim maxime eligendi voluptates qui
                nisi non sit.
              </p>
            </div>
          </Col>
          <Col xs={12} sm={6}>
            <div>
              <img
                src="https://images.unsplash.com/photo-1506783248933-6ebd4421d557?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnVkZGhhfGVufDB8fDB8fHww"
                alt=""
                className="w-100"
              />
            </div>
          </Col>
        </Row>
        <Container className="mb-5 mt-4">
          <p className="title1 fs-2">Our Recommandations</p>
          <Row className="g-3">
            <Card xs={6} />
            <Card xs={6} />
            <Card xs={6} />
            <Card xs={6} />
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Pagoda;
