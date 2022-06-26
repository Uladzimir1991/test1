import React from "react";
import {
  ModalCloseButtonStyled,
  ModalRequestCallTitleStyled,
  ModalSuccessSendMessageStyled,
  ModalSuccessRequestCallItemsStyled,
  ModalRequestSuccessButtonStyled,
} from '../ModalWindowForFeedbakc.style';
import ModalCloseBtn from "../../../features/Icons/ModalCloseBtn";

export const ModalSuccessSendMessageContainer = ({
  contractor,
  validForm,
  handleCloseModal = () => {},
  handleClick = () => {},
}) => {
  return (
    <>
      <ModalSuccessSendMessageStyled validForm={validForm} hidden={!validForm}>
        <ModalRequestCallTitleStyled>
          {/*{successMessageSend}*/}
        </ModalRequestCallTitleStyled>
        <ModalSuccessRequestCallItemsStyled>
          {/*{successMessageSendItemFirst}«{contractor.title}»*/}
          {/*{successMessageSendItemSecond}*/}
        </ModalSuccessRequestCallItemsStyled>
        <ModalRequestSuccessButtonStyled
          validForm={validForm}
          onClick={(event) => handleClick(event)}
          type="submit"
        >
          {/*{successButtonDone}*/}
        </ModalRequestSuccessButtonStyled>
        <ModalCloseButtonStyled type="button" onClick={handleCloseModal}>
          <ModalCloseBtn />
        </ModalCloseButtonStyled>
      </ModalSuccessSendMessageStyled>
    </>
  );
};
