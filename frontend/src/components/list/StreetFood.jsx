import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Col, Container, Row } from "react-bootstrap";
import Card from "../cards/FoodCard";

const StreetFood = () => {
  return (
    <div>
      <Navbar />

      <div fluid className="mb-5">
        <Row className="text-center g-0 bg-brown">
          <Col xs={12} sm={6} className="my-auto">
            <div className="px-2">
              <p className="fs-1 mt-2 title1">Street Food</p>

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
                src="https://images.unsplash.com/photo-1511978293554-7b92f19bd77d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3RyZWV0JTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D"
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

export default StreetFood;
