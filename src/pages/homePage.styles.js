import styled from 'styled-components';

// עטיפה ראשית של הדף
export const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background-color: #f8f9fa; /* צבע רקע נעים */
    min-height: 100vh;
`;

// כותרת ראשית
export const Title = styled.h1`
    font-size: 2rem;
    color: #343a40;
    margin-bottom: 20px;
    text-align: center;
`;

// אזור לחצנים
export const ButtonWrapper = styled.div`
    display: flex;
    gap: 10px;
    margin: 15px 0;
    flex-wrap: wrap; 
`;

// לחצן בחירת מספר שאלות
export const Button = styled.button`
    background-color: ${({ isSelected }) => (isSelected ? '#007bff' : '#ffffff')}; 
    color: ${({ isSelected }) => (isSelected ? '#ffffff' : '#343a40')};
    border: 2px solid #007bff;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    margin:5px;
    &:hover {
        background-color: #0056b3;
        color: #ffffff;
    }
`;

// טקסט שמציג את הבחירה
export const SelectedText = styled.p`
    font-size: 1.2rem;
    color: #6c757d;
    margin-bottom: 20px;
`;

// כפתור התחל משחק
export const StartButton = styled.button`
    background-color: #28a745; 
    color: #ffffff;
    border: none;
    border-radius: 5px;
    padding: 15px 30px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #218838;
    }
`;

// כפתור התחל משחק
export const SubTitle = styled.text`
    text-align:right;
`;




