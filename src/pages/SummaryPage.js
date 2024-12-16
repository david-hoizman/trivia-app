// src/pages/SummaryPage.js
import React from 'react';
import TriviaSummary from '../components/TriviaSummary';

const SummaryPage = ({ score, totalQuestions, correctAnswers }) => {
    return (
        <div>
            <TriviaSummary 
                score={score}
                totalQuestions={totalQuestions}
                correctAnswers={correctAnswers}
            />
        </div>
    );
}

export default SummaryPage;