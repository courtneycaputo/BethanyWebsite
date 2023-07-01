import React, { Component } from 'react';
import Home from './Pages/Home';
import Biography from './Pages/Biography';
import Demos from './Pages/Demos';
import Studio from './Pages/Studio';
import Contact from './Pages/Contact';

export default class PageContainer extends Component {
  render() {
      return (
          <>
       <div id="home" >
        <Home />
      </div>
      <div id="biography" >
        <Biography />
      </div>
      <div id="demos" >
        <Demos />
      </div>
      <div id="studio" >
        <Studio />
      </div>
      {/* <div id="contact" >
        <Contact />
      </div> */}
          </>
      )
  }
}



// export default function PageContainer () {
  
//       return (
//           <>
//        <div id="home" style={{height: 500}}>
//         <Home />
//       </div>
//       <div id="biography" style={{height: 500}}>
//         <Biography />
//       </div>
//       <div id="demos" style={{height: 500}}>
//         <Demos />
//       </div>
//       <div id="studio" style={{height: 500}}>
//         <Studio />
//       </div>
//       <div id="contact" style={{height: 500}}>
//         <Contact />
//       </div>
//           </>
//       )
//   }
