import microphone from '../../assets/microphone.jpg';
import mic from '../../assets/mic.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Wave from '../../assets/wave.jpg';
import UpWave from '../../assets/upperwave.png';
import LowWave from '../../assets/lowerwave.png';
import background1 from '../../assets/Background1.png';



export default function Home() {

  // const myStyle={
  //   backgroundImage:`url(${UpWave}`,
  //   backgroundPosition: 'center',
  //   backgroundSize: 'cover',
  //   backgroundRepeat: 'no-repeat',
  //   // width: '100vw',
  //   height: '100vh',
  // };

  const myStyle={
    backgroundImage:`url(${background1}`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
            
  };

  // style={myStyle}

    return (
      <div >
      <div className='home' style={myStyle}>
        <Row>
          <Col sm={3}>
            
          </Col>
          <Col smsm={9}>
            <div className="homefont">
              Voice Over Verve
            </div>
          
            
          </Col>

          {/* <Col>
            <img src={microphone} className="micpic" />
          </Col> */}
        
        </Row>

        <Row>
          <div className="quote">
            The smallest act of kindness is worth more than the grandest intention – Oscar Wilde
          </div>
        </Row>
      </div>
      </div>

      
      
    );
  }