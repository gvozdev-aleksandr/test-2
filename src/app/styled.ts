import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html {
        height: 100%;
    }

    body,
    html {
        margin: 0;
    }
    
    body {
        font-family: ${({ theme }) => theme.fontFamily};
        font-size: ${({ theme }) => theme.primaryFontSize};
        line-height: ${({ theme }) => theme.primaryLineHeight};
        font-weight: 400;
        color: ${({ theme }) => theme.primaryTextColor};
    }
`;
