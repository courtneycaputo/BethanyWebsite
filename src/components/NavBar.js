import React, { Component } from 'react';
import {Link} from 'react-scroll';
import microphone from '../assets/microphone.jpg';
import useSticky from './useSticky';
import classNames from 'classnames';

// export default class NavBar extends Component {
//     render() {
//         return (
//       <nav className="navbar">
//         <div className="logo">
//         {/* <img src={microphone} className="logopic" /> */}
//         </div>
//         <ul className="nav-links">
//         <li><Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link></li>
//            <li><Link  to="biography" spy={true} smooth={true}>About</Link></li>  
//           <li><Link  to="demos" spy={true} smooth={true}>Demos</Link></li>
//           <li><Link  to="studio" spy={true} smooth={true}>Studio</Link></li>
//           <li><Link  to="contact" spy={true} smooth={true}>Contact</Link></li>
//         </ul>
//       </nav>
//     );
//   }
// }

export default function NavBar () {
    const { sticky, stickyRef } = useSticky();
    
        return (
            <>
      <nav ref={stickyRef} className={classNames('nav flex', { sticky })}>
        <div className="logo">
        {/* <img src={microphone} className="logopic" /> */}
        </div>
        <ul className="nav-links">
        <li><Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link></li>
           <li><Link  to="biography" spy={true} smooth={true}>About</Link></li>  
          <li><Link  to="demos" spy={true} smooth={true}>Demos</Link></li>
          <li><Link  to="studio" spy={true} smooth={true}>Studio</Link></li>
          <li><Link  to="contact" spy={true} smooth={true}>Contact</Link></li>
        </ul>
      </nav>
      <div
      style={{
        height: sticky ? `${stickyRef.current?.clientHeight}px` : '0px',
      }}></div>
      </>
    
    );
  }

