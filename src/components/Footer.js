import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            {/* <img src={logo} alt="Logo" /> */}
            {/* <h2 className="text-white" style={{ fontWeight: 700 }}></h2> */}
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/george-berto-945534253/">
                <img src={navIcon1} alt="linkedin" />
              </a>
              <a href="https://github.com/georgeberto">
                <img src={navIcon2} alt="github" />
              </a>
              <a href="https://www.instagram.com/georgebrto/profilecard/?igsh=dTdoNTBucXNqM2pr">
                <img src={navIcon3} alt="ig" />
              </a>
            </div>
            <p>Copyright 2024.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
