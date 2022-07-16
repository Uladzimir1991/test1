import React from "react";
import {
  ModalCloseButtonStyled,
  ModalSubmitButtonStyled,
  DescriptionTermsStyled,
  TermsStyled,
} from '../ModalWindowForFeedbakc.style';
import ModalCloseBtn from "../../../features/Icons/ModalCloseBtn";

export const ModalFormForButtonsAndTermsContainer = ({
  propName,
  propPhone,
  propEmail,
  handleCloseModal = () => {},
  handleClick = () => {},
}) => {
    const terms = " the terms of personal data processing";

  return (
    <>
      <ModalCloseButtonStyled type="button" onClick={handleCloseModal}>
        <ModalCloseBtn />
      </ModalCloseButtonStyled>
      <ModalSubmitButtonStyled
        onClick={(event) => handleClick(event)}
        type="submit"
        propName={propName}
        propPhone={propPhone}
        propEmail={propEmail}
      >
        Request a call
      </ModalSubmitButtonStyled>
      <DescriptionTermsStyled>
          By clicking the «Request a call» button, you agree to
        <TermsStyled href="/" target="_blank">
            {terms}
        </TermsStyled>
      </DescriptionTermsStyled>
    </>
  );
};
