import styled from 'styled-components';
import MaskedInput from "react-text-mask";

export const ModalWindowForFeedbackWrapper = styled.div`
  ${({ theme }) => theme.mainFont};
  width: 100%;
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  ${({ modalIsOpen }) => (modalIsOpen ? 'height: 100vh;' : 'height: 0;')}
`;

export const ModalFormStyled = styled.form`
  position: relative;
  ${({ modalIsOpen }) =>
    modalIsOpen
      ? 'top: calc(50% - 292px); transition: all .4s linear .2s;'
      : 'top: -585px;'}
  width: 630px;
  height: 585px;
  background-color: ${({ theme }) => theme.designerTitleColor};
  border-radius: 5px;
  margin: auto;
  z-index: 105;
  color: ${({ theme }) => theme.designerColorText};

  ${({ theme }) =>
    theme.mediaMobile(`
        margin: auto 10% auto 5%;
        width: 85%;         
  `)}
`;

export const ModalSuccessSendMessageStyled = styled.div`
  position: relative;
  top: calc(50% - 180px);
  width: 630px;
  height: 275px;
  background-color: ${({ theme }) => theme.designerTitleColor};
  border-radius: 5px;
  padding: 48px;
  margin: auto;
  z-index: 105;
  color: ${({ theme }) => theme.designerColorText};
  text-align: center;
  ${({ validForm }) =>
    validForm
      ? 'display: flex; flex-direction: column; align-items: center; justify-content: space-between;'
      : 'display: none;'}

  ${({ theme }) =>
    theme.mediaMobile(`
        margin: auto 10% auto 5%;
        width: 85%;         
  `)}
`;

export const ContainerForModalItemsStyled = styled.div`
  position: absolute;
  width: 100%;
  padding: 48px;

  ${({ theme }) =>
    theme.mediaMobile(`
        padding: 36px 24px;         
  `)}
`;

export const ModalInputTitleStyled = styled.div`
  ${({ theme }) => theme.landingSmallTitleFontSize};
  ${({ propName, propPhone, propEmail }) =>
    propName === true || propPhone === true || propEmail === true
      ? `margin: 20px 0 10px;`
      : 'margin: 15px 0 7px;'}

  ${({ theme, propName, propPhone, propEmail }) =>
    theme.mediaMobile(`
        ${
          propName === true || propPhone === true || propEmail === true
            ? `margin: 20px 0 10px;`
            : 'margin: 7px 0;'
        }
    `)}
`;

export const ModalInputStyled = styled(MaskedInput)`
  padding: 12px 24px;
  width: 100%;
  ${({ theme }) => theme.textArticleForTextFontSize};
  ::placeholder {
    ${({ theme }) => theme.textArticleForTextFontSize};
  }
  ${({ theme }) => theme.inputBorder};
  ${({ propName, propPhone, propEmail, theme }) =>
    propName === true || propPhone === true || propEmail === true
      ? `background-color: ${theme.whiteColor};`
      : 'border: 1px solid rgb(255, 103, 103); background-color: rgb(255, 203, 203);'}
`;

export const ModalCloseButtonStyled = styled.button`
  border: none;
  position: absolute;
  top: 5px;
  right: 5px;
  padding: 7px;
  background-color: ${({ theme }) => theme.designerTitleColor};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s linear;

  :hover {
    cursor: pointer;
  }

  svg path {
    transition: all 0.4s linear;
  }

  :hover > svg path {
    stroke: ${({ theme }) => theme.hoverColor};
    transition: all 0.4s linear;
  }
`;

export const ModalSubmitButtonStyled = styled.button`
  ${({ theme }) => theme.designerButtonsFontSize};
  ${({ theme }) => theme.buttonStyle};
  ${({ propName, propPhone, propEmail }) =>
    propName === true && propPhone === true && propEmail === true
      ? 'margin: 20px 0 12px;'
      : 'margin: 15px 0 12px;'};
  ${({ validForm }) => (validForm ? 'width: 170px;' : 'width: 100%;')}
  padding: 15px 0;
  transition: all 0.4s linear;
  overflow: hidden;
  position: relative;

  &:before {
    content: '';
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.5)
    );
    height: 50px;
    width: 50px;
    position: absolute;
    top: 0;
    left: -75px;
    transform: skewX(-45deg);
    pointer-events: none;
    opacity: 0;
  }

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.hoverColor};
    text-shadow: 0 0 3px ${({ theme }) => theme.darkTextColor};
    transition: 0.6s ease-in-out;
  }

  &:hover:before {
    left: 100%;
    transition: 0.6s ease-in-out;
    opacity: 1;
  }

  ${({ theme, propName, propPhone, propEmail }) =>
    theme.mediaMobile(`
       ${
         propName === true && propPhone === true && propEmail === true
           ? 'margin: 25px 0 12px;'
           : 'margin: 10px 0 7px'
       };
    `)}
`;

export const DescriptionTermsStyled = styled.div`
  ${({ theme }) => theme.termsOfPersonalDataProcessing};
`;

export const TermsStyled = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.newMainColor};
  transition: all 0.6s linear;

  :hover {
    color: ${({ theme }) => theme.hoverColor};
    text-shadow: 0 0 0 #333;
    transition: all 0.6s linear;
  }
`;

export const ModalRequestCallContainerStyled = styled.div`
  color: ${({ theme }) => theme.designerColorText};
`;

export const ModalRequestCallTitleStyled = styled.h3`
  ${({ theme }) => theme.titleArticleMobileFontSize};

  ${({ theme }) =>
    theme.mediaMobile(`
        ${theme.Manrope_Semibold_20_H4};
    `)}
`;

export const ModalRequestCallItemsStyled = styled.div`
  ${({ theme }) => theme.Manrope_Regular_16_T4};
  ${({ propName, propPhone, propEmail }) =>
    propName === true && propPhone === true && propEmail === true
      ? `margin: 15px 0 30px;`
      : 'margin: 15px 0;'};

  ${({ theme, propName, propPhone, propEmail }) =>
    theme.mediaMobile(`
        ${theme.smallFontSize};
        ${
          propName === true && propPhone === true && propEmail === true
            ? `margin: 15px 0 30px;`
            : 'margin: 5px 0 10px;'
        };
    `)}
`;

export const ModalSuccessRequestCallItemsStyled = styled.div`
  ${({ theme }) => theme.Manrope_Regular_16_T4};
  margin: 15px 0 30px;

  ${({ theme }) =>
    theme.mediaMobile(`
        ${theme.smallFontSize};
        margin: 10px 0 20px;
    `)}
`;

export const ModalRequestSuccessButtonStyled = styled.button`
  ${({ theme }) => theme.designerButtonsFontSize};
  ${({ theme }) => theme.buttonStyle};
  ${({ validForm }) => (validForm ? 'width: 170px;' : 'width: 100%;')}
  padding: 15px 0;
  transition: all 0.4s linear;
  overflow: hidden;
  position: relative;

  &:before {
    content: '';
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.5)
    );
    height: 50px;
    width: 50px;
    position: absolute;
    top: 0;
    left: -75px;
    transform: skewX(-45deg);
    pointer-events: none;
    opacity: 0;
  }

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.hoverColor};
    text-shadow: 0 0 3px ${({ theme }) => theme.darkTextColor};
    transition: 0.6s ease-in-out;
  }

  &:hover:before {
    left: 100%;
    transition: 0.6s ease-in-out;
    opacity: 1;
  }
`;

export const ErrorStyled = styled.div`
  ${({ theme }) => theme.inputError};
`;
