import React from 'react';
import {Link} from 'react-scroll';
import LowWave from '../../assets/lowerwave.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Courtney from '../../assets/Courtney.png';
import photographic from '../../assets/photographic.png';



export default function Biography() {

  const myStyle={
    // backgroundImage:`url(${LowWave}`,
    // backgroundPosition: 'center',
    // backgroundSize: 'cover',
    // backgroundRepeat: 'no-repeat',
    // height: '100vh',
    backgroundColor: '#fff',
    padding: '100px'
  };
  return (
    <div className="about">
      
    <section id="biography" className="section" >
    <Row>
    <Col sm={4}><img src={photographic} className="my-picture" alt="Courtney" /></Col>
    <Col sm={6}>
      <h2>About</h2>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  <br></br>
       <br></br>
     

       <h2><Link  to="contact">Contact Bethany today!</Link></h2>
       </Col>
       </Row>
    </section>
    
    </div>
  );
}


