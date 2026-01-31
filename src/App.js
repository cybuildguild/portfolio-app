import React from "react";
import './App.scss';
import Header from "./components/Header";
import Main from "./components/Main";
import Contact from "./components/Contact";
import Section from "./components/Section";

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Section/>
      <Contact/>
    </div>
  );
}

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
