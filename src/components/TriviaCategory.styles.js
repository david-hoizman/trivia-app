import styled from 'styled-components';

export const CategoryWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const CategoryButton = styled.button`
    margin: 10px;
    padding: 10px 20px;
    font-size: 1em;
    border: 1px solid #333;
    border-radius: 5px;
    background-color: #f4f4f4;
    cursor: pointer;

    &:hover {
        background-color: #ddd;
    }
`;
