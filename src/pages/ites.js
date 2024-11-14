import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { AiOutlineCustomerService, AiOutlineDatabase } from "react-icons/ai";
import { FaRegIdCard } from "react-icons/fa6";
import { MdWifiCalling3 } from "react-icons/md";
import { SiCashapp } from "react-icons/si";
import { GiHumanPyramid } from "react-icons/gi";
import Banner from '../components/Banner';
import Contact from '../components/Contact';


function ITES() {
  const services = [
    { title: 'Customer Support(Call Centers)', icon: <AiOutlineCustomerService size={50} /> },
    { title: 'Data Entry & Processing', icon: <AiOutlineDatabase size={50} /> },
    { title: 'Payroll Management', icon: <FaRegIdCard size={50} /> },
    { title: 'Telemarketing', icon: <MdWifiCalling3 size={50} /> },
    { title: 'Finance & Accounting Services', icon: <SiCashapp size={50} /> },
    { title: 'HR Services', icon: <GiHumanPyramid size={50} /> }
  ];

  return (
    <div className="ites-section">
      <Banner />
      <Container className="ites-container my-5">
        <h2>ITES Services</h2>
        <Row className="ites-row">
          {services.map((service, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="ites-card text-center">
                <Card.Body>
                  {service.icon}
                  <Card.Title className="ites-card-title">{service.title}</Card.Title>
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

export default ITES;