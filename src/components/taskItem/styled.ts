import styled from "styled-components";

export const StyledItem = styled.li`
    background-color: ${({ theme }) => theme.bgCard};
    padding: 20px;
    border-radius: 30px;
    display: flex;
    align-items: center;
`;

export const TaskText = styled.p<{ completed?: boolean }>`
    margin: 0;
    flex-grow: 1;
    font-size: 18px;
    line-height: 150%;
    text-decoration: ${({ completed }) => completed ? 'line-through' : 'none'};
    opacity: ${({ completed }) => completed ? 0.6 : 1};
`;

export const TaskCategory = styled.span`
    color: ${({ theme }) => theme.bgButton};
    margin-right: 20px;
`;

export const ControlWrapper = styled.div`
    display: grid;
`;

export const CloseButton = styled.button`
    color: ${({ theme }) => theme.primaryTextColor};
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 20px;
    padding: 4px 8px;
    border-radius: 4px;
    transition: background-color 0.2s;
    
    &:hover {
        background-color: ${({ theme }) => theme.bgButtonHover || 'rgba(255, 0, 0, 0.1)'};
    }
`;
