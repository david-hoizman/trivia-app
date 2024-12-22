import styled from 'styled-components';

export const TimerWrapper = styled.div`
    border: 1px solid #ddd;
    padding: 5px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    margin: 20px;
    max-width: 100px;
    text-align: center;
    background-color:rgba(12, 2, 2, 0.84);
    color: ${({ isRed }) => (isRed ? 'red' : 'white')};  
    font-size:20px;
    font-family:Lucida Console;
    width:100%;
`;

