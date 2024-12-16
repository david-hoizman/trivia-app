// // src/App.js
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import GamePage from './pages/GamePage';
// import SummaryPage from './pages/SummaryPage';
// import './App.css';  // ייבוא כללי לשמירה על עיצוב ברירת מחדל לכל ה־pages וה־components

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/game">Game</Link>
//             </li>
//             <li>
//               <Link to="/summary">Summary</Link>
//             </li>
//           </ul>
//         </nav>

//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/game" element={<GamePage />} />
//           <Route path="/summary" element={<SummaryPage />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GamePage from './pages/GamePage';
import SummaryPage from './pages/SummaryPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/game" element={<GamePage />} />
                <Route path="/summary" element={<SummaryPage />} />
            </Routes>
        </Router>
    );
}

export default App;
