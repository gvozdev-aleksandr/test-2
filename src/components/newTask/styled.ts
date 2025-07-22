import styled from "styled-components";

export const InputContainer = styled.div`
    display: flex;
    clip-path: inset(0 round 10px);
    background-color: blue;
    margin-bottom: 20px;
`;

export const StyledInput = styled.input.attrs({ type: 'text' })`
    flex-grow: 1;
    padding: 20px;
    background-color: ${({ theme }) => theme.bgCard};
    color: ${({ theme }) => theme.primaryTextColor};
    font-size: 20px;
    border: none;
`;

export const SendButton = styled.button`
    color: ${({ theme }) => theme.primaryTextColor};
    background-color: ${({ theme }) => theme.bgButton};
    padding: 20px;
    font-size: 20px;
    cursor: pointer;
    border: none;

    &:hover {
        background-color: ${({ theme }) => theme.bgButtonHover};
    }
`;
