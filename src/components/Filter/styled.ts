import styled from "styled-components";

export const FilterWrapper = styled.div`
    margin-bottom: 20px;
`;

export const SelectButton = styled.button`
    width: 100%;
    text-align: start;
    padding: ${({ theme }) => theme.selectPadding};
    border: none;
    background-color: ${({ theme }) => theme.bgButton};
    cursor: pointer;

    &:hover {
        box-shadow: 0 0 2px 2px ${({ theme }) => theme.secondaryTextColor} inset;
    }
`;

export const DropDownList = styled.ul`
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
`;

export const DropDownItem = styled.li`
    padding: ${({ theme }) => theme.selectPadding};
    color: ${({ theme }) => theme.secondaryTextColor};
    background-color: ${({ theme }) => theme.bgButton};
    cursor: pointer;

    &:hover {
        box-shadow: 0 0 2px 2px ${({ theme }) => theme.secondaryTextColor} inset;
    }
`;
