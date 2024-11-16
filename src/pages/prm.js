import React, { useState } from 'react'; 
import { Card, Container, Row, Col } from 'react-bootstrap';
import { IoShareSocialOutline } from "react-icons/io5";
import { MdOutlineEmojiEvents } from "react-icons/md";
import { TbBrandDiscord, TbEmergencyBed, TbBrandAdobe } from "react-icons/tb";
import { HiSpeakerphone } from "react-icons/hi";
import { FaBookReader } from "react-icons/fa";
import { MdOutlineContactEmergency } from "react-icons/md";
import { SlEnvolopeLetter } from "react-icons/sl";
import Banner from '../components/Banner';
import Contact from '../components/Contact';
import Certificate from '../components/Certificate';

function PRM() {
  // Define the text array for Banner component
  const rotateTextArray = [
    "Brand Positioning & Messaging",
    "Reputation Management",
    "Crisis Communication",
    "Branding Strategy",
    "Social Media PR",
    "Content Creation & Storytelling",
    "Event PR & Promotions",
    "Crisis Management & Communication",
    "Internal Comm & Employee Engagement",
  ];

  const [hoveredTitle, setHoveredTitle] = useState(rotateTextArray[0]);

  const services = [
    { title: 'Brand Positioning & Messaging', icon: <TbBrandDiscord size={50} /> },
    { title: 'Reputation Management', icon: <HiSpeakerphone size={50} /> },
    { title: 'Crisis Communication', icon: <TbEmergencyBed size={50} /> },
    { title: 'Branding Strategy', icon: <TbBrandAdobe size={50} /> },
    { title: 'Social Media PR', icon: <IoShareSocialOutline size={50} /> },
    { title: 'Content Creation & Storytelling', icon: <FaBookReader size={50} /> },
    { title: 'Event PR & Promotions', icon: <MdOutlineEmojiEvents size={50} /> },
    { title: 'Crisis Management & Communication', icon: <MdOutlineContactEmergency size={50} /> },
    { title: 'Internal Comm & Employee Engagement', icon: <SlEnvolopeLetter size={50} /> },
  ];

  return (
    <div className="prm-section">
      {/* Pass both the hovered title and rotateTextArray to the Banner */}
      <Banner rotateText={hoveredTitle} rotateTextArray={rotateTextArray} />
      <Container className="prm-container my-5">
        <h2>PR Management</h2>
        <Row className="prm-row">
          {services.map((service, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card
                className="prm-card text-center"
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
                    {service.icon}
                  </div>
                  <Card.Title className="prm-card-title">{service.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Certificate />
      <Contact />
    </div>
  );
}

export default PRM;