import styled from "styled-components";

export const InputContainer = styled.div`
    display: flex;
    clip-path: inset(0 round 10px);
`;

export const StyledInput = styled.input.attrs({ type: 'text' })`
    flex-grow: 1;
    background-color: blue;
    padding: 20px;
    border: none;
`;

export const SendButton = styled.button`
    background-color: green;
    padding: 20px;
    cursor: pointer;
    border: none;

    &:hover {
        background-color: red;
    }
`;
