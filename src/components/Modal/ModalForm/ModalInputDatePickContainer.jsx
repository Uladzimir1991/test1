import React from "react";
import {
  ModalInputTitleStyled,
  ModalInputStyled,
  ErrorStyled,
  SuccessStyled,
} from "../ModalWindowForFeedbakc.style";

import "react-datepicker/dist/react-datepicker.css";

export const ModalInputDatePickContainer = ({
  setPropDate,
  propDate,
  date,
}) => {
  const dateVerification = date.isEmpty;

  const handleInputClick = (event) => {
    if (event.target.getAttribute("name") === "Date") {
      setPropDate(true);
    }
  };

  return (
    <>
      <ModalInputTitleStyled>Date of birth</ModalInputTitleStyled>
      <ModalInputStyled
        selected={date.startDate}
        id='Date'
        type="date"
        name="Date"
        required
        form="form"
        onClick={(event) => handleInputClick(event)}
        onBlur={() => date.onBlur()}
        onChange={(event) => date.dateOnChange(event)}
        propDate={propDate}
      />
      {dateVerification && (
        <ErrorStyled hidden={propDate}>Choose the date of birth</ErrorStyled>
      )}
      {!dateVerification && (
        <SuccessStyled hidden={!propDate}>Legal date</SuccessStyled>
      )}
    </>
  );
};
