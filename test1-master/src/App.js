import React, { useState } from "react";
import "./styles/styles.js";
import "./css/App.css";
import {
  AppWrapper,
  StartButtonStyled
} from "./styles/styles";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { ModalWindowForFeedbackContainer } from "./components/Modal/ModalWindowForFeedback.container";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <StartButtonStyled type="button" onClick={() => setModalIsOpen(!modalIsOpen)}>
          Press me
        </StartButtonStyled>
        <ModalWindowForFeedbackContainer
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
        />
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
