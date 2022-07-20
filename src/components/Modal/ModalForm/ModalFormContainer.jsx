import React from "react";
import { ContainerForModalItemsStyled } from "../ModalWindowForFeedbakc.style";
import { ModalRequestCallContainer } from "./ModalRequestCallContainer";
import { ModalFormForButtonsAndTermsContainer } from "./ModalFormForButtonsAndTermsContainer";
import { ModalInputNameContainer } from "./ModalInputNameContainer";
import { ModalInputPhoneContainer } from "./ModalInputPhoneContainer";
import { ModalInputEmailContainer } from "./ModalInputEmailContainer";
import { ModalInputDatePickContainer } from "./ModalInputDatePickContainer";
import { ModalInputMessageContainer } from "./ModalInputMessageContainer";

export const ModalFormContainer = ({
  setPropName,
  setPropPhone,
  setPropEmail,
  setPropDate,
  propDate,
  propName,
  propPhone,
  propEmail,
  setPropMessage,
  propMessage,
  message,
  date,
  name,
  phone,
  email,
  handleCloseModal = () => {},
  handleClick = () => {},
}) => (
  <>
    <ContainerForModalItemsStyled>
      <ModalRequestCallContainer
        propName={propName}
        propPhone={propPhone}
        propEmail={propEmail}
      />
      <ModalInputNameContainer
        setPropName={setPropName}
        propName={propName}
        name={name}
      />
      <ModalInputEmailContainer
        setPropEmail={setPropEmail}
        propEmail={propEmail}
        email={email}
      />
      <ModalInputPhoneContainer
        setPropPhone={setPropPhone}
        propPhone={propPhone}
        phone={phone}
        propName={propName}
        propEmail={propEmail}
      />
      <ModalInputDatePickContainer
        setPropDate={setPropDate}
        propDate={propDate}
        date={date}
      />
      <ModalInputMessageContainer
        setPropMessage={setPropMessage}
        propMessage={propMessage}
        message={message}
      />
      <ModalFormForButtonsAndTermsContainer
        handleCloseModal={handleCloseModal}
        handleClick={handleClick}
      />
    </ContainerForModalItemsStyled>
  </>
);
