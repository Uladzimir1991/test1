import React from "react";
import {
  ModalInputTitleStyled,
  ModalInputStyled,
  ErrorStyled,
} from "../ModalWindowForFeedbakc.style";

export const ModalInputNameContainer = ({
  setPropName,
  propName,
  name,
}) => {
  const nameVerification =
    name.isDirty &&
    (name.isEmpty ||
      name.minLengthError ||
      name.maxLengthError);

  const handleInputClick = (event) => {
    if (event.target.getAttribute("name") === "name") {
      setPropName(true);
    }
  };

  return (
    <>
      <ModalInputTitleStyled propName={propName}>
        Firstname and Lastname
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
        <ErrorStyled hidden={propName}>
          Error! Firstname and Lastname must be between 3 and 30 characters and
          have 1 space between words.
        </ErrorStyled>
      )}
    </>
  );
};
