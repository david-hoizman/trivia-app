import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TriviaCategory from '../components/TriviaCategory';
import { useGameSettings } from '../contexts/GameSettingsContext';
import { PageWrapper, Title, ButtonWrapper, Button, SelectedText, StartButton, CategoryWrapper, CategoryButton, Text, SubTitle } from './homePage.styles';

const HomePage = () => {
    const { questionCount, setQuestionCount } = useGameSettings();
    const navigate = useNavigate();
    const categories = ["מומלצים", "חדשים", "לימודיים"];
    const [selectedCategory,setSelectedCategory] = useState("חדשים")
    
    const handleQuestionCountChange = (count) => {
        setQuestionCount(count);
    };

    const startGame = () => {
        // navigate('/game');
        navigate(`/game`, { state: { category:selectedCategory } });
    };

    return (
        <PageWrapper>
            <Title>ברוך הבא למשחק הטריוויה שלנו!</Title>

            {/* בחירת כמות שאלות */}
                <SubTitle>בחר את כמות השאלות לסיבוב:</SubTitle>
                <ButtonWrapper>

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
            {/* <SelectedText>כמות שאלות שנבחרה: {questionCount}</SelectedText> */}

            {/* הצגת קטגוריות */}
                <SubTitle>בחר קטגוריה</SubTitle>
                <ButtonWrapper>

                <div>
                    {categories.map((category, index) => (
                        <Button key={index} onClick={() => setSelectedCategory(category)} isSelected={selectedCategory === category}>
                            {category}
                        </Button>
                    ))}
                </div>
            </ButtonWrapper>

            {/* כפתור התחלת המשחק */}
            <StartButton onClick={startGame}>התחל משחק</StartButton>

        </PageWrapper>
    );
};

export default HomePage;
