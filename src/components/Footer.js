import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/JacobSmith_Logo_TopLeft.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon icon-pad">
              <a href="https://www.linkedin.com/in/jacob-smith-1a5747263"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/jacobISU"><img src={navIcon2} alt="Icon2"/></a>
            </div>
            <p>Portfolio by Jacob Smith. Site template by <a href="https://github.com/judygab">github.com/judygab</a>.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
