import { createGlobalStyle } from 'styled-components'
const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    border: none;
    outline: none;
}
body{
    background: linear-gradient(-135deg, #fda1a5,#f385c1,#23a6d5,#c365d1 );
    padding:2rem;
    background-size: 100% 120%;
    animation: gradient 2s ease infinite;
    font-display: optional;
    @media (max-width:620px){
        padding:0.2rem;
    }
    font-family:'charm', 'san-serif';

}

p,h4{
    color: ${({ theme }) => theme.color.secondary};
}
h1,h2,h3,li{
    color: ${({ theme }) => theme.color.primary};
}
h4{
    font-weight: ${({ theme }) => theme.font.w_normal};
}




*::-webkit-scrollbar-track {
    width: 7px;
    background-color: #343446;
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3),
      inset 0 2px 6px rgba(0, 0, 0, 0.3);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3),
      inset 0 2px 6px rgba(0, 0, 0, 0.3);
  }

  *::-webkit-scrollbar {
    width: 5px;
    background-color: transparent;
  }

  *::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #78789d;
  }

`
export default GlobalStyles
