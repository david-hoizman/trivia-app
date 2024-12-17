import React from 'react';
import { CardWrapper, Option } from './TriviaCard.styles';

const TriviaCard = React.forwardRef(({ question, options, onSelect, selectedOption, questions, currentQuestionIndex }, ref) => (
    <CardWrapper ref={ref}>
        <h3>{question}</h3>
        <ul>
            {options.map((option, index) => (
                <Option
                    key={index}
                    data-option={option} // הוספת data-attribute
                    onClick={() => onSelect(option)}
                    style={{
                        backgroundColor: selectedOption === option ? (questions[currentQuestionIndex].correctAnswer === option ? 'green' : 'transparent') : 'transparent',
                        borderColor: selectedOption === option ? (questions[currentQuestionIndex].correctAnswer === option ? 'green' : 'red') : 'black', // מסגרת ירוקה אם ענה נכון, אדומה אם לא ענה נכון
                        borderWidth: '3px', // בעובי גדול
                        borderStyle: 'solid',
                        boxShadow: selectedOption === option && questions[currentQuestionIndex].correctAnswer === option ? '0 0 10px rgba(0, 255, 0, 0.5)' : 'none', // זוהר קטן יותר
                    }}
                >
                    {option}
                </Option>
            ))}
        </ul>
    </CardWrapper>
));

export default TriviaCard;
