import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GamePage from './pages/GamePage';
import SummaryPage from './pages/SummaryPage';
import { GameSettingsProvider } from './contexts/GameSettingsContext';

function App() {
    return (
        <GameSettingsProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/game" element={<GamePage />} />
                    <Route path="/summary" element={<SummaryPage />} />
                </Routes>
            </Router>
        </GameSettingsProvider>
    );
}

export default App;
