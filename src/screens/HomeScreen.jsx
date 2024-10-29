import { Row, Col } from "react-bootstrap";
import Project from "../components/Project";
import projects from "../projects";

const HomeScreen = () => {
  return (
    <>
      <Row>
        {projects.map((project) => (
          <Col key={project._id} sm={12} md={6} lg={4} xl={3}>
            <Project project={project} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
