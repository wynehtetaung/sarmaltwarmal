import React from "react";
import Table from "react-bootstrap/Table";
import UserItem from "../user/UserItem";
import { Container } from "react-bootstrap";

const RecentUser = () => {
  return (
    <div>
      <Container className="fs-6 ">
        <p className="text-decoration-underline fs-5">Recent Users</p>
        <Table striped bordered hover variant="light">
          <thead>
            <tr>
              <th>#</th>
              <th> Name</th>
              <th>Gmail</th>
              <th className="text-danger">Delete</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <UserItem />
            <UserItem />
            <UserItem />
            <UserItem />
            <UserItem />
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default RecentUser;
