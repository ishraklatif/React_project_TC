import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <Container className="text-center">
        <p>© 2023 Company Name. All rights reserved.</p>
        <div>
          <a href="#facebook" className="text-light mx-2">Facebook</a>
          <a href="#twitter" className="text-light mx-2">Twitter</a>
          <a href="#linkedin" className="text-light mx-2">LinkedIn</a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
