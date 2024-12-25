import React from "react";
import { Container } from "react-bootstrap";
import BasicInfo from "../components/dashboard/BasicInfo";
import Head from "../components/dashboard/Head";
import RecentUser from "../components/dashboard/RecentUser";
import RecentPost from "../components/dashboard/RecentPost";
import { Route, Routes } from "react-router-dom";
import AddPost from "./posts/AddPost";

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
