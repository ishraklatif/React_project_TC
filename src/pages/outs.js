import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { AiOutlineCustomerService, AiOutlineDatabase } from "react-icons/ai";
import { FaRegIdCard } from "react-icons/fa6";
import { MdWifiCalling3 } from "react-icons/md";
import { SiCashapp } from "react-icons/si";
import { GiHumanPyramid } from "react-icons/gi";
import Banner from '../components/Banner';
import Contact from '../components/Contact';


function OUTS() {
  const services = [
    { title: 'IT & Software Development', icon: <AiOutlineCustomerService size={50} /> },
    { title: 'Customer Support', icon: <AiOutlineDatabase size={50} /> },
    { title: 'Administrative Services', icon: <FaRegIdCard size={50} /> },
    { title: 'IT Infrastructure Management', icon: <MdWifiCalling3 size={50} /> },
    { title: 'Cloud Computing Solutions', icon: <SiCashapp size={50} /> },
    { title: 'Cybersecurity Services', icon: <GiHumanPyramid size={50} /> }
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
