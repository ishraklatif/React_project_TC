import React, { useState } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import Banner from '../components/Banner';
import Contact from '../components/Contact';
import { SiPaloaltosoftware } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { FaAppStoreIos } from "react-icons/fa";
import { TbCloudComputing } from "react-icons/tb";
import { GiCyberEye } from "react-icons/gi";
import { GrHostMaintenance } from "react-icons/gr";

function TECH() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      title: 'Custom Software Development',
      icon: <SiPaloaltosoftware size={50} />,
      description: 'Tailor-made software solutions to meet your unique business needs.',
    },
    {
      title: 'Web Development',
      icon: <CgWebsite size={50} />,
      description: 'Modern and responsive websites to showcase your business online.',
    },
    {
      title: 'Mobile App Development',
      icon: <FaAppStoreIos size={50} />,
      description: 'Innovative and user-friendly mobile applications for all platforms.',
    },
    {
      title: 'Cloud Computing & Infrastructure',
      icon: <TbCloudComputing size={50} />,
      description: 'Secure and scalable cloud solutions to enhance your IT infrastructure.',
    },
    {
      title: 'Cybersecurity Solutions',
      icon: <GiCyberEye size={50} />,
      description: 'Protect your digital assets with advanced cybersecurity services.',
    },
    {
      title: 'IT Support & Maintenance',
      icon: <GrHostMaintenance size={50} />,
      description: 'Reliable IT support to ensure smooth business operations.',
    },
  ];

  return (
    <div className="tech-section">
      <Banner />
      <Container className="tech-container my-5">
        <h2>Tech Services</h2>
        <Row className="tech-row">
          {services.map((service, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card
                className="tech-card text-center"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Card.Body>
                  {service.icon}
                  <Card.Title className="tech-card-title">
                    {service.title}
                  </Card.Title>
                  {hoveredCard === index && (
                    <Card.Text className="tech-card-description">
                      {service.description}
                    </Card.Text>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Contact />
    </div>
  );
}

export default TECH;
