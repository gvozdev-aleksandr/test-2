import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    // Colors
    primaryTextColor: string;
    secondaryTextColor: string;
    bgSection: string;
    bgCard: string;
    bgButton: string;
    bgButtonHover: string;
    bgModal: string;
    
    // Font
    fontFamily: string;
    primaryFontSize: string;
    primaryLineHeight: string;
    
    // Width
    desktopWidth: string;
    maxWidth: string;
    mobileWidth: string;
    
    // Отступы
    desktopPaddingX: string;
    desktopPaddingY: string;
    mobilePaddingX: string;
    mobilePaddingY: string;
    buttonPadding: string;
    selectPadding: string;
  }
}