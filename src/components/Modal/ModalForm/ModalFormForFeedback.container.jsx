import React from "react";
import { ModalFormStyled } from "../ModalWindowForFeedbakc.style";
import { ModalFormContainer } from "./ModalFormContainer";

export const ModalFormForFeedbackContainer = ({
  modalIsOpen,
  validForm,
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
}) => {
  const handleForm = (event) => {
    event.stopPropagation();
  };

  return (
    <>
      <ModalFormStyled
        id="form"
        onClick={(event) => handleForm(event)}
        action="#"
        name="form"
        method="post"
        modalIsOpen={modalIsOpen}
        hidden={validForm}
      >
        <ModalFormContainer
          propName={propName}
          propPhone={propPhone}
          propEmail={propEmail}
          handleCloseModal={handleCloseModal}
          handleClick={handleClick}
          contractor={contractor}
          setPropName={setPropName}
          setPropPhone={setPropPhone}
          setPropEmail={setPropEmail}
          name={name}
          phone={phone}
          email={email}
        />
      </ModalFormStyled>
    </>
  );
};
