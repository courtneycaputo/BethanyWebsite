import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import Biography from './components/Pages/Biography';
import Demos from './components/Pages/Demos';
import Studio from './components/Pages/Studio';
import Contact from './components/Pages/Contact';
import PageContainer from './components/PageContainer';

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



// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <Biography />
//       <Demos />
//       <Studio />
//       <Contact />
//     </div>
//   );
// // }
// export default App;

// function App() {
//   return (
//     <div className="App">
//       <NavBar />
//       <PageContainer />
      
//     </div>
//   );
// }

// export default App;

export default class App extends Component {
  render() {
    return (
      <>
       <NavBar/>
      <PageContainer/>
      </>
    )
  }
}