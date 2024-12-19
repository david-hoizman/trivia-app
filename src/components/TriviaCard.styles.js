import styled from 'styled-components';

export const CardWrapper = styled.div`
    border: 1px solid #ddd;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    margin: 20px;
    max-width: 400px;
    text-align: center;
    width:100%;
    display:flex;
    flex-direction: column;
    align-items: stretch;
`;

export const Options = styled.ul`
    width:90%;
    padding:0px;
`;

export const Option = styled.li`
    list-style: none;
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
    background-color: #f9f9f9;
    width:100%;
    &:hover {
        background-color: #ddd;
    }
`;
