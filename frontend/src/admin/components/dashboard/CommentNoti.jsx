import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

function CommentNoti() {
  return (
    <Button variant="dark" className="mx-3 rounded-pill">
      Comments <Badge bg="danger">9</Badge>
      <span className="visually-hidden">unread messages</span>
    </Button>
  );
}

export default CommentNoti;
