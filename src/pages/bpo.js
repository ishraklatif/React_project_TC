import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { AiOutlineCustomerService, AiOutlineDatabase } from "react-icons/ai";
import { FaRegIdCard } from "react-icons/fa6";
import { MdWifiCalling3 } from "react-icons/md";
import { SiCashapp } from "react-icons/si";
import { GiHumanPyramid } from "react-icons/gi";
import Banner from '../components/Banner';
import Contact from '../components/Contact';


function BPO() {
  const services = [
    { title: 'Data Entry & Management', icon: <AiOutlineCustomerService size={50} /> },
    { title: 'Data Cleansing & Validation', icon: <AiOutlineDatabase size={50} /> },
    { title: 'Data Mining & Analysis', icon: <FaRegIdCard size={50} /> },
    { title: 'Document Digitization', icon: <MdWifiCalling3 size={50} /> },
    { title: 'Finance & Accounting', icon: <SiCashapp size={50} /> },
    { title: 'Back Office Support', icon: <GiHumanPyramid size={50} /> },
    { title: 'Telemarketing & Lead Generation', icon: <GiHumanPyramid size={50} /> },
    { title: 'IT & Technical Support', icon: <GiHumanPyramid size={50} /> },
    { title: 'HR & Recruitment Process Outsourcing(RPO)', icon: <GiHumanPyramid size={50} /> },
    { title: 'Content Moderating & Management', icon: <GiHumanPyramid size={50} /> },
    { title: 'Supply Chain Management', icon: <GiHumanPyramid size={50} /> },
    { title: 'Research & Analytics', icon: <GiHumanPyramid size={50} /> }
  ];

  return (
    <div className="bpo-section">
      <Banner />
      <Container className="bpo-container my-5">
        <h2>BPO</h2>
        <Row className="bpo-row">
          {services.map((service, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="bpo-card text-center">
                <Card.Body>
                  {service.icon}
                  <Card.Title className="bpo-card-title">{service.title}</Card.Title>
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

export default BPO;
