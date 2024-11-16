import React from 'react';
import headerImg from "../assets/img/website-design.jpg";
import headerImg2 from "../assets/img/OIP.jpeg";
import Certificate from '../components/Certificate';
function About() {
  return (
    <div className="container my-5">
      <div className="container_about">
      <div className="container_text">
        <h2>True Compass</h2>
        <h3>Empowering Enterprises with ITES Excellence</h3>
        <p>
          Helinix Limited provides enterprises with customized IT outsourcing services and comprehensive ITES solutions, ranging from sophisticated tech advances to flawless business process outsourcing (BPO) services. As a tech services provider, we offer the know-how and resources required for companies to prosper in the rapidly changing digital landscape, guaranteeing productivity and expansion while concentrating on the key elements that determine your success.
        </p>
      </div>
      </div>
      <div className="container_about1">
      <div className="container_text">
        <h2>Why Us?</h2>
        <h3>Customized Solutions</h3>
        <p>
          We provide enterprises with customized IT and outsourced solutions, ranging from sophisticated tech developments to flawless BPO services. We offer the know-how and resources required for companies to prosper in the rapidly changing digital landscape, guaranteeing productivity and expansion while concentrating on the key elements that determine your success.
        </p>
      </div>
      <img className="container_image" src={headerImg} alt="alt3" />
    </div>
    <div className="container_about1">
      <div className="container_text">
        <h2>Why Us?</h2>
        <h3>We Reach Globally</h3>
        <p>
          For Helinix Limited, “Global Reach” refers to providing outsourcing and IT solutions all over the world while guaranteeing smooth service across regions. This enables companies to grow, gain access to worldwide knowledge, and prosper outside of their local markets.
        </p>
      </div>
      <img className="container_image" src={headerImg2} alt="alt2" />
    </div>
    <Certificate />
    </div>
  );
}

export default About;
