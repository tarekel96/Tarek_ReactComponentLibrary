import { createGlobalStyle, css } from "styled-components";
import { typography } from "./styles";

export const fontUrl =
  "https://fonts.googleapis.com/css2?family=Bangers&display=swap";

export const bodyStyles = css`
  font-family: ${typography.type.primary};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  -webkit-overflow-scrolling: touch;
  * {
    box-sizing: border-box;
  }
`;

export const GlobalStyle = createGlobalStyle`
 body {
   ${bodyStyles}
 }
`;
