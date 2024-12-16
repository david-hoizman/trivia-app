import styled from 'styled-components';

export const CardWrapper = styled.div`
    border: 1px solid #ddd;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    margin: 20px;
    max-width: 400px;
    text-align: center;
`;

export const Option = styled.li`
    list-style: none;
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
    background-color: #f9f9f9;

    &:hover {
        background-color: #ddd;
    }
`;
