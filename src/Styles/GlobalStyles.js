import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html{
    scroll-behavior: smooth;
width: 100vw;
}

body{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    color: white;
    background:linear-gradient(to bottom,black,black , #222222,rgb(45, 45, 45),rgb(58, 58, 58)   );
    overflow-x: hidden;
}

a {
    text-decoration: none;
    }

    a:visited {
    color: white;
    }

    li {
    list-style: none;
    }
`

