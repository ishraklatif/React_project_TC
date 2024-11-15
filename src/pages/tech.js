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
      hoverIcon: <SiPaloaltosoftware size={70} color="#007bff" />, // Larger and colored on hover
      description: [
        'Customized Solutions',
        'End-to-End Development',
        'Software Architecture',
      ],
    },
    {
      title: 'Web Development',
      icon: <CgWebsite size={50} />,
      hoverIcon: <CgWebsite size={70} color="#007bff" />,
      description: [
        'Responsive Website Design',
        'E-commerce Solutions',
        'Web Application Development',
      ],
    },
    {
      title: 'Mobile App Development',
      icon: <FaAppStoreIos size={50} />,
      hoverIcon: <FaAppStoreIos size={70} color="#007bff" />,
      description: [
        'iOS & Android Development',
        'Cross-Platform Solutions',
        'App Maintenance & Support',
      ],
    },
    {
      title: 'Cloud Computing & Infrastructure',
      icon: <TbCloudComputing size={50} />,
      hoverIcon: <TbCloudComputing size={70} color="#007bff" />,
      description: [
        'Cloud Migration',
        'Cloud Management',
        'Infrastructure as a Service (IaaS)',
      ],
    },
    {
      title: 'Cybersecurity Solutions',
      icon: <GiCyberEye size={50} />,
      hoverIcon: <GiCyberEye size={70} color="#007bff" />,
      description: [
        'Threat Detection',
        'Vulnerability Management',
        'Incident Response',
      ],
    },
    {
      title: 'IT Support & Maintenance',
      icon: <GrHostMaintenance size={50} />,
      hoverIcon: <GrHostMaintenance size={70} color="#007bff" />,
      description: [
        '24/7 Technical Support',
        'Network Security & Monitoring',
        'System Troubleshooting',
      ],
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
                  {hoveredCard === index ? service.hoverIcon : service.icon}
                  <Card.Title className="tech-card-title">
                    {service.title}
                  </Card.Title>
                  {hoveredCard === index && (
                    <ul className="tech-card-description">
                      {service.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
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
