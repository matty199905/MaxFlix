import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html{
    scroll-behavior: smooth;
width: 100vw;

::-webkit-scrollbar {
  width: 11px; 
  height: 8px; 
}

::-webkit-scrollbar-track {
  background: #1e1e1e; 
  
}

::-webkit-scrollbar-thumb {
  background:rgb(226, 226, 226); 
  border-radius:20px;


}

::-webkit-scrollbar-thumb:hover {
  background:rgb(192, 115, 0); 
  
}


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


.movie-container {
  justify-content: center;
  @media (max-width: 452px) {
    flex-flow: column wrap;
    justify-content: flex-start;

  }
}

`



