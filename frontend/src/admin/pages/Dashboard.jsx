import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BasicInfo from "../components/dashboard/BasicInfo";
import Head from "../components/dashboard/Head";
import RecentUser from "../components/dashboard/RecentUser";
import RecentPost from "../components/dashboard/RecentPost";

const Dashboard = () => {
  return (
    <div>
      <Container>
        <Head />
        <BasicInfo />
        <RecentUser />
        <RecentPost />
      </Container>
    </div>
  );
};

export default Dashboard;
