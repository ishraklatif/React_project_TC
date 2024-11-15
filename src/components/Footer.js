import React from 'react';
import { Container } from 'react-bootstrap';
import { FaFacebookSquare } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <Container className="text-center">
        <p>© 2024 True Compass Ltd. All rights reserved.</p>
        <div>
          <a href="#facebook"><FaFacebookSquare /></a>
          <a href="#twitter"><RiTwitterXFill /></a>
          <a href="#instagram"><FaInstagram /></a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
