import styled from "styled-components";

export const StatWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
`;

export const TasksCount = styled.span`
    background-color: ${({ theme }) => theme.bgModal};
    color: ${({ theme }) => theme.secondaryTextColor};
    padding: 15px;
    border-radius: 10px;
`;
