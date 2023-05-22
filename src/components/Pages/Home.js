import microphone from '../../assets/microphone.jpg';
import mic from '../../assets/mic.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Home() {
    return (
      
      <div className="home">
        <Row>
          <Col>
            <div className="homefont">
              Bethany Lanza
            </div>
          </Col>

          <Col>
            <img src={microphone} className="micpic" />
          </Col>
        
        </Row>
      </div>
      
    );
  }