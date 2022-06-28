import React, { useEffect } from "react";
import {
  ModalInputTitleStyled,
  ErrorStyled,
  SuccessStyled,
  CheckStyled,
} from "../ModalWindowForFeedbakc.style";
import MaskedInput from "react-text-mask";

export const ModalInputPhoneContainer = ({
  setPropPhone,
  propPhone,
  phone,
}) => {
  const phoneVerification =
    phone.phoneError ||
    phone.isEmpty ||
    phone.minLengthError ||
    phone.maxLengthError;

  const handleInputClick = (event) => {
    if (event.target.getAttribute("name") === "phone") {
      setPropPhone(true);
    }
  };

  const maskItem = [
    "+7",
    "",
    "(",
    /[1-9]/,
    /\d/,
    /\d/,
    ")",
    " ",
    /\d/,
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
  ];

  return (
    <>
      <ModalInputTitleStyled propPhone={propPhone}>
        Phone number
      </ModalInputTitleStyled>
      <MaskedInput
        id="#mask"
        className={propPhone ? "form-control" : "false_form-control"}
        type="text"
        name="phone"
        autoComplete="on"
        onClick={(event) => handleInputClick(event)}
        form="form"
        onChange={(event) => phone.onChange(event)}
        onBlur={phone.onBlur}
        value={phone.value}
        mask={maskItem}
        placeholder="+7(___)___-__-__"
      />
      {phoneVerification && (
        <CheckStyled hidden={!propPhone || phone.value === ""}>
          Please,fill in the mask
        </CheckStyled>
      )}
      {phoneVerification && (
        <ErrorStyled hidden={propPhone}>Please,fill in the mask</ErrorStyled>
      )}
      {!phoneVerification && (
        <SuccessStyled hidden={!propPhone}>Legal number</SuccessStyled>
      )}
    </>
  );
};
