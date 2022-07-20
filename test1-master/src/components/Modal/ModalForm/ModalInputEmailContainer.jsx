import React from "react";
import {
  ModalInputTitleStyled,
  ModalInputStyled,
  ErrorStyled,
  SuccessStyled,
  CheckStyled,
  ContainerForFieldsStyled,
} from "../ModalWindowForFeedbakc.style";

export const ModalInputEmailContainer = ({
  setPropEmail,
  propEmail,
  email,
}) => {
  const emailVerification =
    email.emailError ||
    email.maxLengthError ||
    email.minLengthError ||
    email.isEmpty;

  const handleInputClick = (event) => {
    if (event.target.getAttribute("name") === "email") {
      setPropEmail(true);
    }
  };

  return (
    <ContainerForFieldsStyled>
      <ModalInputTitleStyled propEmail={propEmail}>Email</ModalInputTitleStyled>
      <ModalInputStyled
        type="text"
        name="email"
        autoComplete="on"
        onClick={(event) => handleInputClick(event)}
        placeholder="user@clickyourhome.net"
        required
        form="form"
        onChange={(event) => email.onChange(event)}
        onBlur={email.onBlur}
        value={email.value}
        propEmail={propEmail}
      />
      {emailVerification && (
        <CheckStyled hidden={!propEmail || email.value === ""}>
          Please,fill the email field
        </CheckStyled>
      )}
      {emailVerification && (
        <ErrorStyled hidden={propEmail}>Incorrect email</ErrorStyled>
      )}
      {!emailVerification && (
        <SuccessStyled hidden={!propEmail}>
          Legal email
        </SuccessStyled>
      )}
    </ContainerForFieldsStyled>
  );
};
