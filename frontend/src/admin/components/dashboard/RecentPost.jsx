import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

const RecentPost = () => {
  return (
    <div>
      <div className="fs-5 mb-5">
        <p className="text-decoration-underline">Recent Posts</p>{" "}
        <ListGroup numbered className="border-1">
          <ListGroup.Item action variant="dark">
            Cras justo odio
          </ListGroup.Item>
          <ListGroup.Item action variant="dark">
            Dapibus ac facilisis in
          </ListGroup.Item>
          <ListGroup.Item action variant="dark">
            Morbi leo risus
          </ListGroup.Item>
          <ListGroup.Item action variant="dark">
            Porta ac consectetur ac
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
};

export default RecentPost;
