import React, { useEffect, useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useGameSettings } from '../contexts/GameSettingsContext'; 
import TriviaCard from '../components/TriviaCard';
import { getQuestionsByCategory } from '../services/questionsService';
import { shuffleArray } from '../utils/shuffleUtils';
import Timer from '../components/Timer/Timer';

const GamePage = () => {
    const TIME_TO_TURN = 10;
    const location = useLocation();
    const navigate = useNavigate();
    const { questionCount , isTurnActive, setIsTurnActive, setTime} = useGameSettings(); 
    const category = location.state?.category;
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isAnswering, setIsAnswering] = useState(false);
    const [answered, setAnswered] = useState(false);
    const questionRefs = useRef([]);

    useEffect(() => {
        if (!category) {
            navigate('/');
            return;
        }

        // שליפת שאלות בהתאם לכמות שנבחרה
        const allQuestions = getQuestionsByCategory(category);
        const randomQuestions = shuffleArray(allQuestions).slice(0, questionCount);
        setQuestions(randomQuestions);
        if(!isTurnActive){
            moveToNextQuestion()
        }
    }, [category, navigate, questionCount,isTurnActive]);

    useEffect(() => {
        if (isAnswering && selectedOption !== null) {
            const isCorrect = questions[currentQuestionIndex].correctAnswer === selectedOption;
            const questionElement = questionRefs.current[currentQuestionIndex];

            const optionsElements = questionElement.querySelectorAll('[data-option]');
            optionsElements.forEach((optionElement) => {
                const option = optionElement.getAttribute('data-option');
                if (selectedOption === option) {
                    optionElement.style.borderColor = isCorrect ? 'blue' : 'red';
                } else if (questions[currentQuestionIndex].correctAnswer === option) {
                    optionElement.style.backgroundColor = 'green';
                }
            });

            const timeout = setTimeout(() => {
                moveToNextQuestion();
            }, 2000);

            return () => clearTimeout(timeout);
        }
    }, [isAnswering, selectedOption, currentQuestionIndex, questions]);

    const handleAnswer = (selectedOption) => {
        setSelectedOption(selectedOption);
        setIsAnswering(true);
        setAnswered(true);
    };

    const moveToNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedOption(null);
            setIsAnswering(false);
            setAnswered(false);
            setIsTurnActive(true);
            setTime(TIME_TO_TURN)
        } else {
            alert('נגמר הסיבוב!');
            navigate('/summary');
        }
    };

    if (questions.length === 0) {
        return <div>טוען שאלות...</div>;
    }

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div>
            <Timer/>
            <h1>קטגוריה: {category}</h1>
            <TriviaCard
                key={currentQuestionIndex}
                id={`question-${currentQuestionIndex}`}
                ref={(el) => (questionRefs.current[currentQuestionIndex] = el)}
                question={currentQuestion.text}
                options={currentQuestion.options}
                onSelect={handleAnswer}
                selectedOption={selectedOption}
                questions={questions}
                currentQuestionIndex={currentQuestionIndex}
            />
        </div>
    );
};

export default GamePage;
