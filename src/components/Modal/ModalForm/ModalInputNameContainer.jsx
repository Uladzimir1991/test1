import React from "react";
import {
  ModalInputTitleStyled,
  ModalInputStyled,
  ErrorStyled,
  SuccessStyled,
  CheckStyled,
} from "../ModalWindowForFeedbakc.style";

export const ModalInputNameContainer = ({ setPropName, propName, name }) => {
  const nameVerification = name.nameError || name.isEmpty &&
      name.minLengthError || name.maxLengthError;

  const handleInputClick = (event) => {
    if (event.target.getAttribute("name") === "name") {
      setPropName(true);
    }
  };

  return (
    <>
      <ModalInputTitleStyled propName={propName}>
        Full name
      </ModalInputTitleStyled>
      <ModalInputStyled
        type="text"
        name="name"
        autoComplete="on"
        placeholder="Ivan Ivanov"
        required
        form="form"
        onClick={(event) => handleInputClick(event)}
        onChange={(event) => name.nameOnChange(event)}
        onBlur={() => name.onBlur()}
        value={name.value}
        propName={propName}
      />
      {nameVerification && (
        <CheckStyled hidden={!propName || name.value === ""}>
          First- and lastname must be between 3 and 30 characters and have a
          space between words.
        </CheckStyled>
      )}
      {nameVerification && (
        <ErrorStyled hidden={propName}>
          First- and lastname must be between 3 and 30 characters and have a
          space between words.
        </ErrorStyled>
      )}
      {!nameVerification && (
        <SuccessStyled hidden={!propName}>Legal name</SuccessStyled>
      )}
    </>
  );
};
