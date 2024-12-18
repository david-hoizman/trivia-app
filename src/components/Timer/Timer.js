import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TimerWrapper } from './Timer.styles';
import { useGameSettings } from '../../contexts/GameSettingsContext';

const Timer = () => {
    const navigate = useNavigate();
    const [isRed, setIsRed] = useState(false); 
    const { isTurnActive, setIsTurnActive,time, setTime } = useGameSettings();  

    useEffect(() => {
        const decTimer = setInterval(() => {
                setTime((prevTime)=>{
                    if(prevTime===0 || !isTurnActive){
                        clearInterval(decTimer);
                        setIsTurnActive(false);
                        return 0;
                    }
                    return prevTime - 1;
                });
        }, 1000);
        
        if (time <= 3) {
            setIsRed(true);
        } else {
            setIsRed(false);
        }
        
        return () => clearInterval(decTimer);

    },[time])

    const handleCategoryClick = (category) => {
        console.log("Navigating to /game with category:", category);

        navigate(`/game`, { state: { category } });
    };

    return (
        <TimerWrapper isRed={isRed}>
            {time}
        </TimerWrapper>
    );
};

export default Timer;
