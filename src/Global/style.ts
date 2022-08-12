import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif;
        list-style: none;
        text-decoration: none;
        color: white;
    }
    body {
        background: #141414;
        color: white;
    }
`;