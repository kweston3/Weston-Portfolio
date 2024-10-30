import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button } from "react-bootstrap";
import projects from "../projects";

const ProjectScreen = () => {
  const { id: projectId } = useParams();
  const project = projects.find((p) => p._id === projectId);

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      <Row className="my-2">
        <Col md={5}>
          <Image src={project.image} alt={project.name} fluid />
        </Col>
        <Col md={6}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{project.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>{project.description}</p>
              <Link
                className="btn btn-light my-2"
                to="https://westonshop.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </Link>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default ProjectScreen;
