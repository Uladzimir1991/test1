import React, { useState } from "react";
import "./styles/styles.js";
import "./css/App.css";
import { AppWrapper } from "./styles/styles";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { ModalWindowForFeedbackContainer } from "./components/Modal/ModalWindowForFeedback.container";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <button type="button" onClick={() => setModalIsOpen(!modalIsOpen)}>
          Toggle button
        </button>
        <ModalWindowForFeedbackContainer
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
        />
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
