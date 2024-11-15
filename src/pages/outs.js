import React, { useState } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { TbHierarchy3 } from "react-icons/tb";
import { FaUniversity } from "react-icons/fa";
import { GrCloudSoftware } from "react-icons/gr";
import { GiCyberEye } from "react-icons/gi";
import { MdOutlineEngineering } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";
import Banner from '../components/Banner';
import Contact from '../components/Contact';

function OUTS() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      title: 'IT & Software Development',
      icon: <MdOutlineEngineering size={50} />,
      hoverIcon: <MdOutlineEngineering size={70} color="#ffffff" />,
      description: [
        'Custom Application Development',
        'Software Design & Testing',
        'System Integration',
      ],
    },
    {
      title: 'Customer Support',
      icon: <RiCustomerService2Line size={50} />,
      hoverIcon: <RiCustomerService2Line size={70} color="#ffffff" />,
      description: [
        '24/7 Customer Assistance',
        'Technical Support',
        'Customer Query Resolution',
      ],
    },
    {
      title: 'Administrative Services',
      icon: <TbHierarchy3 size={50} />,
      hoverIcon: <TbHierarchy3 size={70} color="#ffffff"/>,
      description: [
        'Data Management',
        'Operational Support',
        'Executive Assistance',
      ],
    },
    {
      title: 'IT Infrastructure Management',
      icon: <FaUniversity size={50} />,
      hoverIcon: <FaUniversity size={70} color="#ffffff" />,
      description: [
        'Network Monitoring',
        'Server Administration',
        'Database Management',
      ],
    },
    {
      title: 'Cloud Computing Solutions',
      icon: <GrCloudSoftware size={50} />,
      hoverIcon: <GrCloudSoftware size={70}color="#ffffff" />,
      description: [
        'Cloud Migration Services',
        'Infrastructure as a Service (IaaS)',
        'Cloud Security Solutions',
      ],
    },
    {
      title: 'Cybersecurity Services',
      icon: <GiCyberEye size={50} />,
      hoverIcon: <GiCyberEye size={70} color="#ffffff"/>,
      description: [
        'Risk Assessment',
        'Threat Mitigation',
        'Data Security Management',
      ],
    },
  ];

  return (
    <div className="outs-section">
      <Banner />
      <Container className="outs-container my-5">
        <h2>Out Sourcing</h2>
        <Row className="outs-row">
          {services.map((service, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card
                className="outs-card text-center"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Card.Body>
                  {hoveredCard === index ? service.hoverIcon : service.icon}
                  <Card.Title className="outs-card-title">
                    {service.title}
                  </Card.Title>
                  {hoveredCard === index && (
                    <ul className="outs-card-description">
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

export default OUTS;
