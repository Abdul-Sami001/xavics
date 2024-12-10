import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";
import "./../../assets/css/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="footer-top py-5">
          <Col md={4} className="footer-section text-center text-md-start mb-4 mb-md-0">
            <h5 className="footer-title mb-3">About Us</h5>
            <p>
              Transforming ideas into reality with innovative solutions for the digital age.
              Let us empower your goals with passion and precision.
            </p>
          </Col>
          <Col md={4} className="footer-section text-center text-md-start mb-4 mb-md-0">
            <h5 className="footer-title mb-3">Quick Links</h5>
            <ul className="footer-links list-unstyled">
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/portfolio">Projects</a>
              </li>
              <li>
                <a href="/contactus">Contact</a>
              </li>
            </ul>
          </Col>
          <Col md={4} className="footer-section text-center text-md-start">
            <h5 className="footer-title mb-3">Connect With Us</h5>
            <div className="footer-social-icons d-flex justify-content-center justify-content-md-start gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61566743877885&mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.linkedin.com/company/105459527/admin/page-posts/published/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/codeinovations/profilecard/?igsh=MWJ0ZjZ4YnBnZjloNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaInstagram />
              </a>
              <a href="mailto:xavics48@gmail.com" className="social-icon">
                <FaEnvelope />
              </a>
            </div>
          </Col>
        </Row>
        <Row className="footer-divider my-4">
          <Col>
            <hr />
          </Col>
        </Row>
        <Row className="footer-bottom py-3">
          <Col className="text-center">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} <strong>Xavics</strong>. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
