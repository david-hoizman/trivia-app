import React, { createContext, useContext, useState } from 'react';

const GameSettingsContext = createContext();

export const GameSettingsProvider = ({ children }) => {
    const [questionCount, setQuestionCount] = useState(3);

    return (
        <GameSettingsContext.Provider value={{ questionCount, setQuestionCount }}>
            {children}
        </GameSettingsContext.Provider>
    );
};

export const useGameSettings = () => useContext(GameSettingsContext);
