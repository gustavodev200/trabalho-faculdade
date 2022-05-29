import { createGlobalStyle } from "styled-components";
import bg from "../assets/images/bg.png";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-image: url(${bg});
    background-size: cover;
    font-family: 'Open Sans', sans-serif;
  }
`;

export default GlobalStyle;
