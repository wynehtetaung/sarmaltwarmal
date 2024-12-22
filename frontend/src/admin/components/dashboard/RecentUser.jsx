import React from "react";
import Table from "react-bootstrap/Table";

const RecentUser = () => {
  return (
    <div>
      <div className="fs-6 ">
        <p className="text-decoration-underline fs-5">Recent Users</p>
        <Table striped bordered hover variant="light">
          <thead>
            <tr>
              <th>#</th>
              <th> Name</th>
              <th>Gmail</th>
              <th className="text-danger">Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>mark@gmail.com</td>
              <td>delete</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>jacob@gmail.com</td>
              <td>delete</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Adam</td>
              <td>adam@gmail.com</td>
              <td>delete</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default RecentUser;
