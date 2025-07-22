import styled from "styled-components";

export const StyledSection = styled.section`
    background-color: ${({ theme }) => theme.bgSection};
`;

export const Container = styled.div`
    min-width: ${({ theme }) => theme.mobileWidth};
    width: 100%;    
    margin: 0 auto;    
    max-width: ${({ theme }) => theme.maxWidth};
    padding-block: ${({ theme }) => theme.desktopPaddingY};
    padding-inline: clamp(40px, 40px + 30 * (100vw - 600px) / 600, 70px);      
`;

export const AppTitle = styled.h1`
    margin: 0;
    margin-bottom: 40px;
    color: ${({ theme }) => theme.secondaryTextColor};
    text-align: center;
`;

export const StyledList = styled.ul`
    display: grid;
    padding: 0;
    margin: 0;
    list-style: none; 
    gap: 20px;
    margin-bottom: 20px;
`;
