import styled from "styled-components";

export const FormWrapper = styled.form`
    margin-bottom: 20px;
`;

export const InputContainer = styled.div`
    display: flex;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.bgCard};
    overflow: hidden;
    border: 2px solid transparent;
    transition: border-color 0.2s;
    
    &:focus-within {
        border-color: ${({ theme }) => theme.bgCard || '#4CAF50'};
    }
`;

export const StyledInput = styled.input`
    flex-grow: 1;
    padding: 16px 20px;
    background-color: transparent;
    color: ${({ theme }) => theme.primaryTextColor};
    font-size: 16px;
    border: none;
    outline: none;
    
    &::placeholder {
        color: ${({ theme }) => theme.secondaryTextColor};
        opacity: 0.7;
    }
    
    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;

export const SendButton = styled.button`
    color: ${({ theme }) => theme.primaryTextColor};
    background-color: ${({ theme }) => theme.bgButton};
    padding: 16px 24px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    border: none;
    transition: all 0.2s;
    white-space: nowrap;

    &:hover:not(:disabled) {
        background-color: ${({ theme }) => theme.bgButtonHover};
        transform: translateY(-1px);
    }
    
    &:active:not(:disabled) {
        transform: translateY(0);
    }
    
    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        transform: none;
    }
    
    &:focus {
        outline: 2px solid ${({ theme }) => theme.bgCard || '#4CAF50'};
        outline-offset: 2px;
    }
`;