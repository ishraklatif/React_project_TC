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
  // Define an array for rotating text
  const rotateTextArray = [
    "Custom Software Development",
    "Web Development",
    "Mobile App Development",
    "Cloud Computing & Infrastructure",
    "Cybersecurity Solutions",
    "IT Support & Maintenance",
  ];

  const [hoveredTitle, setHoveredTitle] = useState(rotateTextArray[0]);

  const services = [
    {
      title: 'Custom Software Development',
      icon: <SiPaloaltosoftware size={50} />,
      hoverIcon: <SiPaloaltosoftware size={70} color="#ffffff" />, // Larger and white on hover
      description: [
        'Customized Solutions',
        'End-to-End Development',
        'Software Architecture',
      ],
    },
    {
      title: 'Web Development',
      icon: <CgWebsite size={50} />,
      hoverIcon: <CgWebsite size={70} color="#ffffff" />,
      description: [
        'Responsive Website Design',
        'E-commerce Solutions',
        'Web Application Development',
      ],
    },
    {
      title: 'Mobile App Development',
      icon: <FaAppStoreIos size={50} />,
      hoverIcon: <FaAppStoreIos size={70} color="#ffffff" />,
      description: [
        'iOS & Android Development',
        'Cross-Platform Solutions',
        'App Maintenance & Support',
      ],
    },
    {
      title: 'Cloud Computing & Infrastructure',
      icon: <TbCloudComputing size={50} />,
      hoverIcon: <TbCloudComputing size={70} color="#ffffff" />,
      description: [
        'Cloud Migration',
        'Cloud Management',
        'Infrastructure as a Service (IaaS)',
      ],
    },
    {
      title: 'Cybersecurity Solutions',
      icon: <GiCyberEye size={50} />,
      hoverIcon: <GiCyberEye size={70} color="#ffffff" />,
      description: [
        'Threat Detection',
        'Vulnerability Management',
        'Incident Response',
      ],
    },
    {
      title: 'IT Support & Maintenance',
      icon: <GrHostMaintenance size={50} />,
      hoverIcon: <GrHostMaintenance size={70} color="#ffffff" />,
      description: [
        '24/7 Technical Support',
        'Network Security & Monitoring',
        'System Troubleshooting',
      ],
    },
  ];

  return (
    <div className="tech-section">
      {/* Pass both the rotateTextArray and hoveredTitle to the Banner */}
      <Banner rotateTextArray={rotateTextArray} rotateText={hoveredTitle} />
      <Container className="tech-container my-5">
        <h2>Tech Services</h2>
        <Row className="tech-row">
          {services.map((service, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card
                className="tech-card text-center"
                onMouseEnter={() => setHoveredTitle(service.title)}
                onMouseLeave={() => setHoveredTitle(rotateTextArray[0])}
              >
                <Card.Body>
                  <div
                    style={{
                      color: hoveredTitle === service.title ? "#ffffff" : "#000000",
                      fontSize: "50px",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {hoveredTitle === service.title ? service.hoverIcon : service.icon}
                  </div>
                  <Card.Title className="tech-card-title">{service.title}</Card.Title>
                  {hoveredTitle === service.title && (
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
