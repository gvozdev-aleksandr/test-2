import styled from "styled-components";

export const StyledSection = styled.section`
    background-color: ${({ theme }) => theme.bgSection};
`;

export const Container = styled.div`
    min-width: ${({ theme }) => theme.mobileWidth};
    width: 100%;
    padding: ${({ theme }) => theme.mobilePaddingX} ${({ theme }) => theme.mobilePaddingY};
    margin: 0 auto;

    @media (min-width: ${({ theme }) => theme.desktopWidth}) {
        max-width: ${({ theme }) => theme.maxWidth};
        padding-block: ${({ theme }) => theme.desktopPaddingY};
        padding-inline: clamp(40px, 40px + 30 * (100vw - 600px) / 600, 70px);         
    } 
`;

export const StyledList = styled.ul`
    display: grid;
    padding: 0;
    margin: 0;
    list-style: none; 
    gap: 20px;
    margin-bottom: 20px;
`;
