import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Col, Container, Row } from "react-bootstrap";
import Card from "../cards/FoodCard";

const CafeShop = () => {
  return (
    <div>
      <Navbar />
      <div fluid className=" mb-5">
        <Row className="text-center bg-brown g-0">
          <Col xs={12} sm={6} className="my-auto">
            <div className=" px-2">
              <p className="fs-1 mt-2 title1">Cafe Shops</p>

              <p className="fs-6 fs-00">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Suscipit esse inventore labore error tempore non totam, odit
                minus rem fuga fugiat quas. Adipisci fuga voluptas libero
                perspiciatis corporis suscipit aspernatur.
              </p>
            </div>
          </Col>
          <Col xs={12} sm={6}>
            <div className="">
              <img
                src="https://images.unsplash.com/photo-1516444047568-267791690c03?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhZmUlMjBzaG9wfGVufDB8fDB8fHww"
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

export default CafeShop;
