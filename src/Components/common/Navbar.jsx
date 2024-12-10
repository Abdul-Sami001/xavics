import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { motion } from "framer-motion";
import "./../../assets/css/navbar.css";

const CustomNavbar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Navbar
        expand="lg"
        className="custom-navbar"
        style={{ height: "70px" }}
      >
        <Container>
          <Navbar.Brand href="/" className="brand">
            <motion.img
              src="/logo.png"
              alt="Logo"
              className="navbar-logo"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          </Navbar.Brand>
          <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className="custom-toggler"
          >
            <span className="toggler-icon"></span>
            <span className="toggler-icon"></span>
            <span className="toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {["Home", "About", "Services", "Portfolio", "Contact Us"].map(
                (item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1, x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Nav.Link
                      href={`/${item.toLowerCase().replace(" ", "")}`}
                      className="nav-link"
                    >
                      {item}
                    </Nav.Link>
                  </motion.div>
                )
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.div>
  );
};

export default CustomNavbar;
