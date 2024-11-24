import { Container, Row, Col } from "react-bootstrap";

export const Skill = () => {
  return (
    <section id="skills">
      <h1 className="text-center py-5" id="skill-title">
        Skills
      </h1>
      <div id="top">
        <Container className="mb-5">
          <h3 className="tagline mb-5 p-1">
            My Skills & Technologies I Can Use
          </h3>
          <Row className="justify-content-center mt-1 gy-5">
            <Col className="text-center" xs={4} md={3} xl={3}>
              <i
                className="fa-brands fa-html5 fa-2xl"
                style={{ color: "#fff" }}
              ></i>
              <h5>HTML5</h5>
            </Col>
            <Col className="text-center" xs={4} md={3} xl={3}>
              <i
                className="fa-brands fa-css3-alt fa-2xl"
                style={{ color: "#fff" }}
              ></i>
              <h5>CSS3</h5>
            </Col>
            <Col className="text-center" xs={4} md={3} xl={3}>
              <i
                className="fa-brands fa-js fa-2xl"
                style={{ color: "#fff" }}
              ></i>
              <h5>Javascript</h5>
            </Col>
            <Col className="text-center" xs={4} md={3} xl={3}>
              <i
                className="fa-solid fa-display fa-2xl"
                style={{ color: "#fff" }}
              ></i>
              <h5>Responsive Website</h5>
            </Col>
            <Col className="text-center" xs={4} md={3} xl={3}>
              <i
                className="fa-brands fa-react fa-2xl"
                style={{ color: "#fff" }}
              ></i>
              <h5>React</h5>
            </Col>
            <Col className="text-center" xs={4} md={3} xl={3}>
              <i
                className="fa-brands fa-sass fa-2xl"
                style={{ color: "#fff" }}
              ></i>
              <h5>Scss</h5>
            </Col>
            <Col className="text-center" xs={4} md={3} xl={3}>
              <i
                className="fa-brands fa-figma fa-2xl"
                style={{ color: "#fff" }}
              ></i>
              <h5>Figma</h5>
            </Col>
          </Row>
          <h2 className="tagline mt-5 mb-0 p-1">Currently working on:</h2>
          <h5>
            I'm currently working on React and working my way to be a fullstack
            developer.
          </h5>
        </Container>
      </div>
    </section>
  );
};
