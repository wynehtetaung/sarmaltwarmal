import { Container } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";

const BreadCrumb = () => {
  return (
    <Container className="mt-3 fs-5">
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="">Library</Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
      </Breadcrumb>
    </Container>
  );
};
export default BreadCrumb;
