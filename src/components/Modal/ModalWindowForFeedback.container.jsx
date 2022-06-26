import React,{ useState } from 'react';
import { ModalWindowForFeedbackWrapper } from './ModalWindowForFeedbakc.style';
import { useInput} from "../../hooks/useValidation.hook";
import { ModalFormForFeedbackContainer } from './ModalForm/ModalFormForFeedback.container';
import { ModalSuccessSendMessageContainer } from './ModalForm/ModalSuccessMessageContainer';

export const ModalWindowForFeedbackContainer = ({
  modalIsOpen,
  setModalIsOpen,
  contractor,
}) => {
  const [validForm, setValidForm] = useState(false);
  const [propName, setPropName] = useState(true);
  const [propPhone, setPropPhone] = useState(true);
  const [propEmail, setPropEmail] = useState(true);

  const name = useInput(``, {isEmpty: true , minLength: 7, maxLength: 61})
  const phone = useInput('', {
    isEmpty: true,
    minLength: 16,
    maxLength: 20,
    isPhone: true,
  });
  const email = useInput('', {
    isEmpty: true,
    minLength: 5,
    maxLength: 256,
    isEmail: true,
  });

  const validItems = name.inputValid && phone.inputValid && email.inputValid;

  const handleCloseModal = () => {
    setModalIsOpen(!modalIsOpen);
    setValidForm(false);
    setPropName(true);
    setPropPhone(true);
    setPropEmail(true);
  };

  const handleClick = (event) => {
    event.preventDefault();
    name.onClick();
    phone.onClick();
    email.onClick();
    setValidForm(validItems);
    setPropName(name.inputValid);
    setPropPhone(phone.inputValid);
    setPropEmail(email.inputValid);
  };

  return (
    <>
      <ModalWindowForFeedbackWrapper
        modalIsOpen={modalIsOpen}
        onClick={handleCloseModal}
      >
        <ModalSuccessSendMessageContainer
          contractor={contractor}
          validForm={validForm}
          handleCloseModal={handleCloseModal}
          handleClick={handleClick}
        />
        <ModalFormForFeedbackContainer
          contractor={contractor}
          modalIsOpen={modalIsOpen}
          validForm={validForm}
          setPropName={setPropName}
          setPropPhone={setPropPhone}
          setPropEmail={setPropEmail}
          propName={propName}
          propPhone={propPhone}
          propEmail={propEmail}
          name={name}
          phone={phone}
          email={email}
          handleCloseModal={handleCloseModal}
          handleClick={handleClick}
        />
      </ModalWindowForFeedbackWrapper>
    </>
  );
};
