import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { SummaryWrapper, Button } from './TriviaSummary.styles';

const TriviaSummary = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { score, totalQuestions } = location.state || {};

    if (score === undefined || totalQuestions === undefined) {
        navigate('/');
        return null;
    }

    return (
        <SummaryWrapper>
            <h1>סיכום המשחק</h1>
            <p>ענית נכון על {score} מתוך {totalQuestions} שאלות!</p>
            <Button onClick={() => navigate('/')}>חזור לדף הבית</Button>
        </SummaryWrapper>
    );
};

export default TriviaSummary;
