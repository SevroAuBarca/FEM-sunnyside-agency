import { useState } from "react";
import { Header } from "./components/header/Header";
import { createGlobalStyle } from "styled-components";
import logo from "./logo.svg";
import { Main } from "./components/main/Main";
import styled from "styled-components";
import { funcion } from "./models/header.module";

const GlobalStyle = createGlobalStyle`
  * {
  padding : 0 ;
  margin: 0;
  box-sizing: border-box;
  }
`;

const Container = styled.div`
  position: relative;
`;

function App() {
  const [isOpen, setisOpen] = useState<boolean>(false);

  const handleClick: funcion = () => {
    setisOpen?.(!isOpen);
  };
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header handleClick={handleClick} isOpen={isOpen} />
        <Main />
      </Container>
    </>
  );
}

export default App;
