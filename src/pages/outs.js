import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { TbHierarchy3 } from "react-icons/tb";
import { FaUniversity } from "react-icons/fa";
import { GrCloudSoftware } from "react-icons/gr";
import { GiCyberEye } from "react-icons/gi";
import Banner from '../components/Banner';
import Contact from '../components/Contact';
import { MdOutlineEngineering } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";

function OUTS() {
  const services = [
    { title: 'IT & Software Development', icon: <MdOutlineEngineering size={50} /> },
    { title: 'Customer Support', icon: <RiCustomerService2Line size={50} /> },
    { title: 'Administrative Services', icon: <TbHierarchy3 size={50} /> },
    { title: 'IT Infrastructure Management', icon: <FaUniversity size={50} /> },
    { title: 'Cloud Computing Solutions', icon: <GrCloudSoftware size={50} /> },
    { title: 'Cybersecurity Services', icon: <GiCyberEye size={50} /> }
  ];

  return (
    <div className="outs-section">
      <Banner />
      <Container className="outs-container my-5">
        <h2>Out Sourcing</h2>
        <Row className="outs-row">
          {services.map((service, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="outs-card text-center">
                <Card.Body>
                  {service.icon}
                  <Card.Title className="outs-card-title">{service.title}</Card.Title>
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
