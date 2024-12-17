import React from 'react';
import { useNavigate } from 'react-router-dom';
import TriviaCategory from '../components/TriviaCategory';
import { useGameSettings } from '../contexts/GameSettingsContext';
import { PageWrapper, Title, ButtonWrapper, Button, SelectedText, StartButton } from './homePage.styles';

const HomePage = () => {
    const { questionCount, setQuestionCount } = useGameSettings();
    const navigate = useNavigate();
    const categories = ["מומלצים", "חדשים", "לימודיים"];

    const handleQuestionCountChange = (count) => {
        setQuestionCount(count);
    };

    const startGame = () => {
        navigate('/game');
    };

    return (
        <PageWrapper>
            <Title>ברוך הבא למשחק הטריוויה שלנו!</Title>

            {/* בחירת כמות שאלות */}
            <ButtonWrapper>
                <span>בחר את כמות השאלות לסיבוב:</span>
                {[3, 4, 5].map((count) => (
                    <Button
                        key={count}
                        onClick={() => handleQuestionCountChange(count)}
                        isSelected={questionCount === count}
                    >
                        {count}
                    </Button>
                ))}
            </ButtonWrapper>

            {/* הצגת בחירה */}
            <SelectedText>כמות שאלות שנבחרה: {questionCount}</SelectedText>

            {/* כפתור התחלת המשחק */}
            <StartButton onClick={startGame}>התחל משחק</StartButton>

            {/* הצגת קטגוריות */}
            <TriviaCategory categories={categories} />
        </PageWrapper>
    );
};

export default HomePage;
