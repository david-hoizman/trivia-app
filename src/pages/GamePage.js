import React, { useEffect, useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import TriviaCard from '../components/TriviaCard';
import { getQuestionsByCategory } from '../services/questionsService';
import { shuffleArray } from '../utils/shuffleUtils'; // פונקציה שמערבבת את המערך

const GamePage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const category = location.state?.category; // קבלת הקטגוריה מה-state
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isAnswering, setIsAnswering] = useState(false);
    const [answered, setAnswered] = useState(false); // מצב עבור אם כבר ענו או לא
    const questionRefs = useRef([]); // Ref לשמירת התייחסויות לכל שאלות

    useEffect(() => {
        if (!category) {
            navigate('/'); // אם אין קטגוריה, חזור לדף הבית
            return;
        }

        const allQuestions = getQuestionsByCategory(category);
        const randomQuestions = shuffleArray(allQuestions).slice(0, 3); // בוחר שלוש שאלות רנדומליות
        setQuestions(randomQuestions);
    }, [category, navigate]);

    useEffect(() => {
        if (isAnswering && selectedOption !== null) {
            const isCorrect = questions[currentQuestionIndex].correctAnswer === selectedOption;
            const questionElement = questionRefs.current[currentQuestionIndex];
    
            // צבע את כל התשובות
            const optionsElements = questionElement.querySelectorAll('[data-option]');
            optionsElements.forEach(optionElement => {
                const option = optionElement.getAttribute('data-option');
                if (selectedOption === option) {
                    optionElement.style.borderColor = isCorrect ? 'blue' : 'red'; // אם זו התשובה הנבחרת, צבע בכחול אם היא נכונה, באדום אם היא לא
                } else if (questions[currentQuestionIndex].correctAnswer === option) {
                    // optionElement.style.borderColor = 'blue'; // אם זו התשובה הנכונה (אך לא נבחרה), צבע בכחול
                    optionElement.style.backgroundColor = 'green'; // הצבע את התשובה הנכונה בירוק
                }
            });
    
            // תזמן מעבר לשאלה הבאה לאחר 2 שניות
            const timeout = setTimeout(() => {
                moveToNextQuestion();
            }, 2000);
    
            return () => clearTimeout(timeout);
        }
    }, [isAnswering, selectedOption, currentQuestionIndex, questions]);
    

    const handleAnswer = (selectedOption) => {
        setSelectedOption(selectedOption);
        setIsAnswering(true);
        setAnswered(true); // עדכן שהשאלה הזאת נענתה
    };

    const moveToNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedOption(null);
            setIsAnswering(false);
            setAnswered(false); // ביטול הסטטוס של שאלה נענתה
        } else {
            // סיום המשחק
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
            <h1>קטגוריה: {category}</h1>
            <TriviaCard
                key={currentQuestionIndex}
                id={`question-${currentQuestionIndex}`}
                ref={el => questionRefs.current[currentQuestionIndex] = el} // הצמדנו את ה-Ref הנכון לכל שאלה
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
