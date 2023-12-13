import microphone from '../../assets/microphone.jpg';
import mic from '../../assets/mic.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Wave from '../../assets/wave.jpg';
import UpWave from '../../assets/upperwave.png';
import LowWave from '../../assets/lowerwave.png';
import headergraphic from '../../assets/headergraphic.png';



export default function Home() {

  // const myStyle={
  //   backgroundImage:`url(${UpWave}`,
  //   backgroundPosition: 'center',
  //   backgroundSize: 'cover',
  //   backgroundRepeat: 'no-repeat',
  //   // width: '100vw',
  //   height: '100vh',
  // };

  // const myStyle={
  //   backgroundImage:`url(${headergraphic}`,
  //   backgroundPosition: 'center',
  //   backgroundSize: 'cover',
  //   backgroundRepeat: 'no-repeat',
  //   width: '100%',
            
  // };

/* <div className='home' style={myStyle}> */

    return (
      <div >
      <div className='home' >
      
            <img src={headergraphic} className='header-pic'/>
          
      </div>
      </div>

      
      
    );
  }