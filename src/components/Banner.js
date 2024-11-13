// import React, { useState, useEffect, useMemo } from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import { ArrowRightCircle } from 'react-bootstrap-icons';
// import headerImg from '../assets/img/header-img-removebg.png';
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';
// import { useNavigate } from 'react-router-dom';

// export const Banner = () => {
//   const [loopNum, setLoopNum] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [text, setText] = useState('');
//   const [delta, setDelta] = useState(300 - Math.random() * 100);
//   const period = 2000;

//   // Memoize the toRotate array so it only initializes once
//   const toRotate = useMemo(() => [
//     "IT Enabled Services (ITES)", 
//     "Outsourcing Services", 
//     "BPO Services", 
//     "Tech Services", 
//     "PR Management"
//   ], []);
//   const navigate = useNavigate();
//   useEffect(() => {
//     const tick = () => {
//       let i = loopNum % toRotate.length;
//       let fullText = toRotate[i];
//       let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

//       setText(updatedText);

//       if (isDeleting) {
//         setDelta(prevDelta => prevDelta / 2);
//       }

//       if (!isDeleting && updatedText === fullText) {
//         setIsDeleting(true);
//         setDelta(period);
//       } else if (isDeleting && updatedText === '') {
//         setIsDeleting(false);
//         setLoopNum(prevLoopNum => prevLoopNum + 1); // Functional update here
//         setDelta(500);
//       }
//     };

//     let ticker = setInterval(() => {
//       tick();
//     }, delta);

//     return () => clearInterval(ticker);
//   }, [text, delta, isDeleting, loopNum, toRotate]); // Included loopNum in dependencies

//   return (
//     <section className="banner" id="home">
//       <Container>
//         <Row className="align-items-center">
//           <Col xs={12} md={6} xl={7}>
//             <TrackVisibility>
//               {({ isVisible }) =>
//                 <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
//                   <h1>
//                     <span className="txt-rotate" dataPeriod="1000" data-rotate={JSON.stringify(toRotate)}>
//                       <span className="wrap">{text}</span>
//                     </span>
//                   </h1>
//                   <p>We provide exceptional services to meet all your needs.</p>
//                   <button onClick={() => navigate('/contact')}> {/* Navigate to Contact */}
//                     Let’s Connect <ArrowRightCircle size={25} />
//                   </button>
//                 </div>}
//             </TrackVisibility>
//           </Col>
//           <Col xs={12} md={6} xl={5}>
//             <TrackVisibility>
//               {({ isVisible }) =>
//                 <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
//                   <img src={headerImg} alt="Header Img" style={{ width: '30%', height: 'auto' }} />
//                 </div>}
//             </TrackVisibility>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default Banner;

import React, { useState, useEffect, useMemo } from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = React.memo(() => { // Use React.memo to avoid re-renders
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;
  
  const [hasAnimated, setHasAnimated] = useState(false); // Track if animation has run once

  const toRotate = useMemo(() => [
    "IT Enabled Services (ITES)", 
    "Outsourcing Services", 
    "BPO Services", 
    "Tech Services", 
    "PR Management"
  ], []);

 

  useEffect(() => {
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(prevLoopNum => prevLoopNum + 1);
        setDelta(500);
      }
    };

    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text, delta, isDeleting, loopNum, toRotate]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => {
                // Only apply animation the first time it's visible
                if (isVisible && !hasAnimated) {
                  setHasAnimated(true);
                }
                return (
                  <div className={hasAnimated ? "animate__animated animate__fadeIn" : ""}>
                    <h1>
                      <span className="txt-rotate" dataPeriod="1000" data-rotate={JSON.stringify(toRotate)}>
                        <span className="wrap">{text}</span>
                      </span>
                    </h1>
                  </div>
                );
              }}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
});

export default Banner;
