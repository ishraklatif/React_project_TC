import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { AiOutlineDatabase } from "react-icons/ai";
import { GrDocumentStore } from "react-icons/gr";
import { SiCashapp } from "react-icons/si";
import { GiHumanPyramid } from "react-icons/gi";
import Banner from '../components/Banner';
import Contact from '../components/Contact';
import { TbDatabaseCog } from "react-icons/tb";
import { LuDatabaseBackup } from "react-icons/lu";
import { BsTelephoneForward } from "react-icons/bs";
import { FaUnity } from "react-icons/fa";
import { GiHumanTarget } from "react-icons/gi";
import { MdContentPasteSearch } from "react-icons/md";
import { MdOutlineConnectingAirports } from "react-icons/md";
import { GiArchiveResearch } from "react-icons/gi";

function BPO() {
  const services = [
    { title: 'Data Entry & Management', icon: <TbDatabaseCog size={50} /> },
    { title: 'Data Cleansing & Validation', icon: <AiOutlineDatabase size={50} /> },
    { title: 'Data Mining & Analysis', icon: <LuDatabaseBackup size={50} /> },
    { title: 'Document Digitization', icon: <GrDocumentStore size={50} /> },
    { title: 'Finance & Accounting', icon: <SiCashapp size={50} /> },
    { title: 'Back Office Support', icon: <GiHumanPyramid size={50} /> },
    { title: 'Telemarketing & Lead Generation', icon: <BsTelephoneForward size={50} /> },
    { title: 'IT & Technical Support', icon: <FaUnity size={50} /> },
    { title: 'HR & Recruitment Process Outsourcing(RPO)', icon: <GiHumanTarget size={50} /> },
    { title: 'Content Moderating & Management', icon: <MdContentPasteSearch size={50} /> },
    { title: 'Supply Chain Management', icon: <MdOutlineConnectingAirports size={50} /> },
    { title: 'Research & Analytics', icon: <GiArchiveResearch size={50} /> }
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
