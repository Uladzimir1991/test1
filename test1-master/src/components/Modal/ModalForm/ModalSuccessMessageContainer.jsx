import React, {useEffect} from "react";
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
  console.log(data);
  return (
      validForm && data.response || data.error ? (
        <>
          <ModalSuccessSendMessageStyled validForm={validForm} hidden={!validForm}>
            <ModalRequestCallTitleStyled>
            </ModalRequestCallTitleStyled>
            <ModalSuccessRequestCallItemsStyled>
              {!data.error ? (
                  <div>
                    {data.response}
                  </div> ) :
                  (<div>
                    {data.error}
                  </div>)
              }
            </ModalSuccessRequestCallItemsStyled>
            <ModalCloseButtonStyled type="button" onClick={handleCloseModal}>
              <ModalCloseBtn />
            </ModalCloseButtonStyled>
          </ModalSuccessSendMessageStyled>
        </>
      ) : null
  );
};
