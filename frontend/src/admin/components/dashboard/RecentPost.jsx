import React from "react";
import { Container } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

const RecentPost = () => {
  return (
    <div>
      <Container className="fs-5 mb-5">
        <p className="text-decoration-underline">Recent Posts</p>{" "}
        <ListGroup numbered className="border-1">
          <ListGroup.Item action variant="dark">
            <Link to="/dashboard" className="text-decoration-none text-dark">
              {" "}
              Post Title 1
            </Link>
          </ListGroup.Item>
          <ListGroup.Item action variant="dark">
            <Link to="/add_post" className="text-decoration-none text-dark">
              {" "}
              Post Title 2
            </Link>
          </ListGroup.Item>
          <ListGroup.Item action variant="dark">
            <Link to="/post_list" className="text-decoration-none text-dark">
              {" "}
              Post Title 3
            </Link>
          </ListGroup.Item>
          <ListGroup.Item action variant="dark">
            <Link to="/users" className="text-decoration-none text-dark">
              {" "}
              Post Title 4
            </Link>
          </ListGroup.Item>
        </ListGroup>
      </Container>
    </div>
  );
};

export default RecentPost;
