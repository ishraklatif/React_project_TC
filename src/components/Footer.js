import React from 'react';
import { Container } from 'react-bootstrap';
import { FaFacebookSquare } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <Container fluid className="footer-container">
        <div className="footer-left">
        <p>Address: BTA Tower (14th Floor),</p><p> 29 Kemal Ataturk Avenue, C/A Road No. 17, Dhaka 1213</p>
          <p>Phone: +880-1670232908</p>
          <p>Email: <a href="mailto:truecompassbd@gmail.com">adsfe@gmail.com</a></p>
          
          <div>
            <a href="#facebook"><FaFacebookSquare /></a>
            <a href="#twitter"><RiTwitterXFill /></a>
            <a href="#instagram"><FaInstagram /></a>
          </div>
        </div>
        <div className="footer-right">
        <p>© 2024 True Compass Ltd. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
