import React from "react";
import {
  ModalCloseButtonStyled,
  ModalRequestCallTitleStyled,
  ModalSuccessSendMessageStyled,
  ModalSuccessRequestCallItemsStyled,
  ModalRequestSuccessButtonStyled,
} from "../ModalWindowForFeedbakc.style";
import ModalCloseBtn from "../../../features/Icons/ModalCloseBtn";

export const ModalSuccessSendMessageContainer = ({
  data,
  validForm,
  handleCloseModal = () => {},
  handleClick = () => {},
}) => {
  const submitData = [];
  submitData.push(JSON.parse(data));
  return (
    <>
      <ModalSuccessSendMessageStyled validForm={validForm} hidden={!validForm}>
        <ModalRequestCallTitleStyled>
        </ModalRequestCallTitleStyled>
        <ModalSuccessRequestCallItemsStyled>
          {submitData.map(item => (
              <div key={item.name}>
                <div>{item.name}</div>
                <div>{item.phone}</div>
                <div>{item.email}</div>
                <div>{item.birthday}</div>
                <div>{item.message}</div>
              </div>
          ))}
        </ModalSuccessRequestCallItemsStyled>
        <ModalCloseButtonStyled type="button" onClick={handleCloseModal}>
          <ModalCloseBtn />
        </ModalCloseButtonStyled>
      </ModalSuccessSendMessageStyled>
    </>
  );
};
