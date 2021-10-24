import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

body {
    font-family: 'Inter', sans-serif;
    background: ${({ theme }) => theme.colors.body};
    color: ${({theme}) => theme.colors.secondary};
    max-width: 1216px;
    margin: 0 auto;
    font-style: normal;
    font-weight: normal;
}

button {
  cursor: pointer;
}

`;