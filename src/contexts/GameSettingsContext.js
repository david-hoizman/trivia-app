import React, { createContext, useContext, useState } from 'react';

const GameSettingsContext = createContext();

export const GameSettingsProvider = ({ children }) => {
    const [questionCount, setQuestionCount] = useState(3);
    const [isTurnActive, setIsTurnActive] = useState(true);
    const [time, setTime] = useState(10);


    return (
        <GameSettingsContext.Provider value={{ questionCount, setQuestionCount,isTurnActive, setIsTurnActive,time, setTime}}>
            {children}
        </GameSettingsContext.Provider>
    );
};

export const useGameSettings = () => useContext(GameSettingsContext);
