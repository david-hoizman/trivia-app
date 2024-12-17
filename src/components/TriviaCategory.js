import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CategoryWrapper, CategoryButton } from './TriviaCategory.styles';

const TriviaCategory = ({ categories }) => {
    const navigate = useNavigate();

    const handleCategoryClick = (category) => {
        console.log("Navigating to /game with category:", category); 

        navigate(`/game`, { state: { category } });
    };

    return (
        <CategoryWrapper>
            <h2>בחר קטגוריה</h2>
            <div>
                {categories.map((category, index) => (
                    <CategoryButton key={index} onClick={() => handleCategoryClick(category)}>
                        {category}
                    </CategoryButton>
                ))}
            </div>
        </CategoryWrapper>
    );
};

export default TriviaCategory;
