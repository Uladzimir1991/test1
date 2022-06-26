import React from "react";
import {
  ModalRequestCallTitleStyled,
  ModalRequestCallItemsStyled,
  ModalRequestCallContainerStyled,
} from "../ModalWindowForFeedbakc.style";

export const ModalRequestCallContainer = ({
  contractor,
  propFirstName,
  propLastName,
  propPhone,
  propEmail,
}) => {
  return (
    <>
      <ModalRequestCallContainerStyled>
        <ModalRequestCallTitleStyled>
          Callback order
        </ModalRequestCallTitleStyled>
        <ModalRequestCallItemsStyled
          propFirstName={propFirstName}
          propLastName={propLastName}
          propPhone={propPhone}
          propEmail={propEmail}
        >
          Leave your contact details and a representative «{contractor.title}» will contact you within 2 hours.
        </ModalRequestCallItemsStyled>
      </ModalRequestCallContainerStyled>
    </>
  );
};
