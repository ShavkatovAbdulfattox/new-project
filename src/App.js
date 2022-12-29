import Header from "./components/Header";
import Main from "./components/main/Main";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
--body_bg: hsl(0deg 100% 0%);
--white: hsl(0deg 100% 100%);
--title: #dcca87;
--grey: #aaaaaa;
}


`;

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Header />
      <Main />
    </>
  );
}

export default App;
