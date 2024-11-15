import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { IoShareSocialOutline } from "react-icons/io5";
import { MdOutlineEmojiEvents } from "react-icons/md";
import Banner from '../components/Banner';
import Contact from '../components/Contact';
import { TbBrandDiscord } from "react-icons/tb";
import { HiSpeakerphone } from "react-icons/hi";
import { TbEmergencyBed } from "react-icons/tb";
import { TbBrandAdobe } from "react-icons/tb";
import { FaBookReader } from "react-icons/fa";
import { MdOutlineContactEmergency } from "react-icons/md";
import { SlEnvolopeLetter } from "react-icons/sl";


function PRM() {
  const services = [
    { title: 'Brand Positioning & Messaging', icon: <TbBrandDiscord size={50} /> },
    { title: 'Reputation Management', icon: <HiSpeakerphone size={50} /> },
    { title: 'Crisis Communication', icon: <TbEmergencyBed size={50} /> },
    { title: 'Branding Strategy', icon: <TbBrandAdobe size={50} /> },
    { title: 'Social Media PR', icon: <IoShareSocialOutline size={50} /> },
    { title: 'Content Creation & Storytelling', icon: <FaBookReader size={50} /> },
    { title: 'Event PR & Promotions', icon: <MdOutlineEmojiEvents size={50} /> },
    { title: 'Crisis Management & Communication', icon: <MdOutlineContactEmergency size={50} /> },
    { title: 'Internal Communication & Employee Engagement', icon: <SlEnvolopeLetter size={50} /> }
  ];

  return (
    <div className="prm-section">
      <Banner />
      <Container className="prm-container my-5">
        <h2>PR Management</h2>
        <Row className="prm-row">
          {services.map((service, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="prm-card text-center">
                <Card.Body>
                  {service.icon}
                  <Card.Title className="prm-card-title">{service.title}</Card.Title>
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

export default PRM;
