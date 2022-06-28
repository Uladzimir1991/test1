import React from "react";
import {
  ModalInputTitleStyled,
  ModalTextareaStyled,
  ErrorStyled,
  SuccessStyled,
  CheckStyled,
} from "../ModalWindowForFeedbakc.style";

export const ModalInputMessageContainer = ({
  setPropMessage,
  propMessage,
  message,
}) => {
  const messageVerification =
    message.isEmpty || message.minLengthError || message.maxLengthError;

  const handleInputTextareaClick = () => {
    setPropMessage(true);
  };

  return (
    <>
      <ModalInputTitleStyled>Your message</ModalInputTitleStyled>
      <ModalTextareaStyled
        name="textarea"
        required
        form="form"
        placeholder='Your message'
        onClick={handleInputTextareaClick}
        onBlur={message.onBlur}
        onChange={(event) => message.onChange(event)}
        propMessage={propMessage}
        value={message.value}
      />
      {messageVerification && (
        <CheckStyled hidden={!propMessage || message.value === ''}>
          Message must be between 10 and 300
        </CheckStyled>
      )}
      {messageVerification && (
        <ErrorStyled hidden={propMessage}>
          Message must be between 10 and 300
        </ErrorStyled>
      )}
      {!messageVerification && (
        <SuccessStyled hidden={propMessage && message.minLengthError}>Legal message</SuccessStyled>
      )}
    </>
  );
};
