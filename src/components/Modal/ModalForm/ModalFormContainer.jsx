import React from "react";
import { ContainerForModalItemsStyled } from "../ModalWindowForFeedbakc.style";
import { ModalRequestCallContainer } from "./ModalRequestCallContainer";
import { ModalFormForButtonsAndTermsContainer } from "./ModalFormForButtonsAndTermsContainer";
import { ModalInputNameContainer } from "./ModalInputNameContainer";
import { ModalInputPhoneContainer } from "./ModalInputPhoneContainer";
import { ModalInputEmailContainer } from "./ModalInputEmailContainer";

export const ModalFormContainer = ({
  contractor,
  setPropName,
  setPropPhone,
  setPropEmail,
  propName,
  propPhone,
  propEmail,
  name,
  phone,
  email,
  handleCloseModal = () => {},
  handleClick = () => {},
}) => (
  <>
    <ContainerForModalItemsStyled>
      <ModalRequestCallContainer
        contractor={contractor}
        propName={propName}
        propPhone={propPhone}
        propEmail={propEmail}
      />
      <ModalInputNameContainer
        setPropName={setPropName}
        propName={propName}
        name={name}
      />
      <ModalInputPhoneContainer
        setPropPhone={setPropPhone}
        propPhone={propPhone}
        phone={phone}
      />
      <ModalInputEmailContainer
        setPropEmail={setPropEmail}
        propEmail={propEmail}
        email={email}
      />
      <ModalFormForButtonsAndTermsContainer
        handleCloseModal={handleCloseModal}
        handleClick={handleClick}
      />
    </ContainerForModalItemsStyled>
  </>
);
