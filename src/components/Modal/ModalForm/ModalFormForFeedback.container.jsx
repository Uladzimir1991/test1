import React from "react";
import { ModalFormStyled } from "../ModalWindowForFeedbakc.style";
import { ModalFormContainer } from "./ModalFormContainer";

export const ModalFormForFeedbackContainer = ({
  modalIsOpen,
  validForm,
  setPropName,
  setPropPhone,
  setPropEmail,
  propDate,
  setPropDate,
  setPropMessage,
  propMessage,
  message,
  propName,
  propPhone,
  propEmail,
  date,
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
        name="form"
        modalIsOpen={modalIsOpen}
        hidden={validForm}
      >
        <ModalFormContainer
          propName={propName}
          propPhone={propPhone}
          propEmail={propEmail}
          handleCloseModal={handleCloseModal}
          handleClick={handleClick}
          setPropName={setPropName}
          setPropPhone={setPropPhone}
          setPropEmail={setPropEmail}
          setPropDate={setPropDate}
          propDate={propDate}
          name={name}
          phone={phone}
          email={email}
          date={date}
          setPropMessage={setPropMessage}
          propMessage={propMessage}
          message={message}
        />
      </ModalFormStyled>
    </>
  );
};
