import React from "react";

import { Col, Container, Row } from "react-bootstrap";
import MainMenu from "../components/menu/MainMenu";
import Dashboard from "./Dashboard";
import { Route, Routes } from "react-router-dom";

const AdminHome = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col xs={2} className="bg-dark">
            <div className="min vh-100 sticky-top">
              {" "}
              <MainMenu />
            </div>
          </Col>
          <Col xs={10}>
            <Dashboard />
            {/* <Routes>
              <Route path="/admin/dashboard" element={<Dashboard />} />
            </Routes> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AdminHome;
