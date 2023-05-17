// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header>
//         <h1>Voiceover Portfolio</h1>
//       </header>
//       <section className="bio">
//         <h2>Biography</h2>
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tellus ut lectus imperdiet congue vel eu eros. Sed auctor bibendum nibh at eleifend. Sed ut placerat nisi. Donec dictum ante eu blandit laoreet.</p>
//       </section>
//       <section className="demos">
//         <h2>Demos</h2>
//         <ul>
//           <li><a href="#">Commercial Demo</a></li>
//           <li><a href="#">Narration Demo</a></li>
//           <li><a href="#">Animation Demo</a></li>
//         </ul>
//       </section>
//       <section className="studio">
//         <h2>Studio</h2>
//         <p>My home studio includes a Neumann TLM 103 microphone, Universal Audio Apollo Twin interface, and Adobe Audition editing software.</p>
//       </section>
//       <section className="contact">
//         <h2>Contact</h2>
//         <p>Email: john@voiceover.com</p>
//         <p>Phone: 555-123-4567</p>
//       </section>

//     </div>
//   );
// }

// export default App;








// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [activeSection, setActiveSection] = useState('biography');

//   return (
//     <div className="App">
//       <nav className="navbar">
//         <ul>
//           <li>
//             <button
//               className={activeSection === 'biography' ? 'active' : ''}
//               onClick={() => setActiveSection('biography')}
//             >
//               Biography
//             </button>
//           </li>
//           <li>
//             <button
//               className={activeSection === 'demos' ? 'active' : ''}
//               onClick={() => setActiveSection('demos')}
//             >
//               Demos
//             </button>
//           </li>
//           <li>
//             <button
//               className={activeSection === 'studio' ? 'active' : ''}
//               onClick={() => setActiveSection('studio')}
//             >
//               Studio
//             </button>
//           </li>
//           <li>
//             <button
//               className={activeSection === 'contact' ? 'active' : ''}
//               onClick={() => setActiveSection('contact')}
//             >
//               Contact
//             </button>
//           </li>
//         </ul>
//       </nav>

//       <section className="main-section">
//         {activeSection === 'biography' && (
//           <div className="section-content">
//             <h2>Biography</h2>
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
//             </p>
//           </div>
//         )}
//         {activeSection === 'demos' && (
//           <div className="section-content">
//             <h2>Demos</h2>
//             <p>
//               Here are some samples of my voiceover work:
//               <ul>
//                 <li><a href="#">Demo 1</a></li>
//                 <li><a href="#">Demo 2</a></li>
//                 <li><a href="#">Demo 3</a></li>
//               </ul>
//             </p>
//           </div>
//         )}
//         {activeSection === 'studio' && (
//           <div className="section-content">
//             <h2>Studio</h2>
//             <p>
//               Here is some information about my studio setup:
//               <ul>
//                 <li>Microphone: XYZ</li>
//                 <li>Recording Software: ABC</li>
//                 <li>Other Equipment: DEF</li>
//               </ul>
//             </p>
//           </div>
//         )}
//         {activeSection === 'contact' && (
//           <div className="section-content">
//             <h2>Contact</h2>
//             <p>
//               You can contact me by email at <a href="mailto:youremail@example.com">youremail@example.com</a>.
//             </p>
//           </div>
//         )}
//       </section>
//     </div>
//   );
// }

// export default App;





// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   return (
//       <div className="app">
//         <nav className="navbar">
//           <ul>
//             <li><a href="#bio">Biography</a></li>
//             <li><a href="#demos">Demos</a></li>
//             <li><a href="#studio">Studio</a></li>
//             <li><a href="#contact">Contact</a></li>
//           </ul>
//         </nav>
//         <section id="bio">
//           <h1>Biography</h1>
//           <p>Insert your biography here</p>
//         </section>
//         <section id="demos">
//           <h1>Demos</h1>
//           <p>Insert your demos here</p>
//         </section>
//         <section id="studio">
//           <h1>Studio</h1>
//           <p>Insert your studio information here</p>
//         </section>
//         <section id="contact">
//           <h1>Contact</h1>
//           <p>Insert your contact information here</p>
//         </section>
//       </div>
//     );
//   }


// export default App;



// TEST from chat GPT

import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Biography from './components/Biography';
import Demos from './components/Demos';
import Studio from './components/Studio';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div id="biography">
        <Biography />
      </div>
      <div id="demos">
        <Demos />
      </div>
      <div id="studio">
        <Studio />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
