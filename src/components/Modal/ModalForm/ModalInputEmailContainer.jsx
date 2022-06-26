import React from "react";
import {
  ModalInputTitleStyled,
  ModalInputStyled,
  ErrorStyled,
} from '../ModalWindowForFeedbakc.style';

export const ModalInputEmailContainer = ({
  setPropEmail,
  propEmail,
  email,
}) => {

  const emailVerification =
    email.isDirty &&
    (email.emailError ||
      email.maxLengthError ||
      email.minLengthError ||
      email.isEmpty);

  const handleInputClick = (event) => {
    if (event.target.getAttribute('name') === 'email') {
      setPropEmail(true);
    }
  };

  return (
    <>
      <ModalInputTitleStyled propEmail={propEmail}>
        Email
      </ModalInputTitleStyled>
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
        <ErrorStyled hidden={propEmail}>"Error! Incorrect email"</ErrorStyled>
      )}
    </>
  );
};
