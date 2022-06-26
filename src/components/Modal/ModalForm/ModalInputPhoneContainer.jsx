import React from "react";
import {
  ModalInputTitleStyled,
  ModalInputStyled,
  ErrorStyled,
} from "../ModalWindowForFeedbakc.style";
import MaskedInput from "react-text-mask";


export const ModalInputPhoneContainer = ({
  setPropPhone,
  propPhone,
  phone,
}) => {
  const phoneVerification =
    phone.isDirty &&
    (phone.phoneError ||
      phone.maxLengthError ||
      phone.minLengthError ||
      phone.isEmpty);

  const handleInputClick = (event) => {
    if (event.target.getAttribute("name") === "phone") {
      setPropPhone(true);
    }
  };

  return (
    <>
      <ModalInputTitleStyled propPhone={propPhone}>
        Phone number
      </ModalInputTitleStyled>
      <ModalInputStyled>
          <MaskedInput
        type="text"
        name="phone"
        autoComplete="on"
        onClick={(event) => handleInputClick(event)}
        form="form"
        onChange={(event) => phone.phoneOnChange(event)}
        onBlur={phone.onBlur}
        value={phone.value}
        propPhone={propPhone}
        mask={['+7','','(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
        className="form-control"
        placeholder="+7(***)***-**-**"
        guide={true}
      />
      </ModalInputStyled>
      {phoneVerification && (
        <ErrorStyled hidden={propPhone}>
          Error! The phone number must begin with a `+` and be 17 digits
        </ErrorStyled>
      )}
    </>
  );
};
