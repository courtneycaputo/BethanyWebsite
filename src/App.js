import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/NavBar';
import Biography from './components/Biography';
import Demos from './components/Demos';
import Studio from './components/Studio';
import Contact from './components/Contact';

// function App() {
//   return (
//     <div className="App">
//       <NavBar />
//       <div id="biography">
//         <Biography />
//       </div>
//       <div id="demos">
//         <Demos />
//       </div>
//       <div id="studio">
//         <Studio />
//       </div>
//       <div id="contact">
//         <Contact />
//       </div>
//     </div>
//   );
// }

// export default App;



function App() {
  return (
    <div className="App">
      <Navbar />
      <Biography />
      <Demos />
      <Studio />
      <Contact />
    </div>
  );
}

export default App;