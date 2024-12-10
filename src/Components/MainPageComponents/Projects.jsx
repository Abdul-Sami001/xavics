import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./../../assets/css/projects.css";

const projects = [
  {
    id: 1,
    title: "Unilancers",
    description: "Unilancers is a freelance marketplace empowering university students to connect with clients, showcase skills, and earn while studying.",
    image: require('./../../assets/ProjectImages/project1/image1.png'),
  },
  {
    id: 2,
    title: "DriveUni",
    description: `DriveUni is a bus tracking app enhancing safe, informed travel for students while
streamlining admin and driver operations.`,
    image: require('./../../assets/ProjectImages/project8/1.png'),
  },
  {
    id: 3,
    title: "Football Academy Website",
    description: "A responsive website for managing football programs, schedules, and player registrations, showcasing training sessions and facilities.",
    image: require('./../../assets/ProjectImages/project5/image1.png'),
  },
  {
    id: 4,
    title: "Shift-Ease",
    description: "Shift Ease is a user-friendly platform streamlining house shifting and property rental services by connecting users with reliable providers.",
    image: require('./../../assets/ProjectImages/project4/Picture1.jpg'),
  },
  {
    id: 5,
    title: "Home Ease App",
    description: "Developed an all-in-one housing app offering rentals, moving services, and home decor solutions with a seamless user experience.",
    image: require('./../../assets/ProjectImages/project6/1.png'),
  },
  {
    id: 6,
    title: "Auth System",
    description: "Developed a secure, scalable authentication application using Flutter and Django with email credentials and social login integrations.",
    image: require('./../../assets/ProjectImages/project7/1.jpeg'),
  },
];

const ProjectsPage = () => {
  const navigate = useNavigate();

  const handleViewDetails = (id) => {
    navigate(`/project-details/${id}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="projects-page"
    >
      <Container>
        <h1 className="text-center mb-5" id='projecttitle'>Our Projects</h1>
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-container mb-5 shadow-sm rounded"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <Row
              className={`align-items-center ${
                index % 2 !== 0 ? "flex-row-reverse" : ""
              }`}
            >
              <Col md={6} className="text-center">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="project-image fixed-thumbnail"
                  fluid
                />
              </Col>
              <Col md={6} className="p-4">
                <h2 className="project-title">{project.title}</h2>
                <p className="project-description">{project.description}</p>
                <Button
                  variant="primary"
                  className="cta-button"
                  onClick={() => handleViewDetails(project.id)}
                >
                  View Details
                </Button>
              </Col>
            </Row>
          </motion.div>
        ))}
      </Container>
    </motion.div>
  );
};

export default ProjectsPage;
