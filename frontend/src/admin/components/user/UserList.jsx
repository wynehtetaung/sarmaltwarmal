import React from "react";
import Table from "react-bootstrap/Table";

import UserItem from "./UserItem";

const UserList = () => {
  const [no, setNo] = React.useState(0);

  return (
    <div>
      <h1 className="text-decoration-underline my-3">USER LIST</h1>
      <p className="text-end text-decoration-underline fs-5">23 users</p>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th className="text-danger text-center">Delete</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <UserItem no={no} />
          <UserItem no={no} />
          <UserItem no={no} />
          <UserItem no={no} />
          <UserItem no={no} />
          <UserItem no={no} />
          <UserItem no={no} />
          <UserItem no={no} />
          <UserItem no={no} />
          <UserItem no={no} />
          <UserItem no={no} />
          <UserItem no={no} />
          <UserItem no={no} />
          <UserItem no={no} />
          <UserItem no={no} />
          <UserItem no={no} />
          <UserItem no={no} />
          <UserItem no={no} />
          <UserItem no={no} />
        </tbody>
      </Table>
    </div>
  );
};

export default UserList;
