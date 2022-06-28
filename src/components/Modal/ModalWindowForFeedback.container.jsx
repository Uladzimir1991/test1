import React, { useState } from "react";
import { ModalWindowForFeedbackWrapper } from "./ModalWindowForFeedbakc.style";
import { useInput } from "../../hooks/useValidation.hook";
import { ModalFormForFeedbackContainer } from "./ModalForm/ModalFormForFeedback.container";
import { ModalSuccessSendMessageContainer } from "./ModalForm/ModalSuccessMessageContainer";

export const ModalWindowForFeedbackContainer = ({
  modalIsOpen,
  setModalIsOpen,
}) => {
  const [validForm, setValidForm] = useState(false);
  const [propName, setPropName] = useState(true);
  const [propPhone, setPropPhone] = useState(true);
  const [propEmail, setPropEmail] = useState(true);
  const [propDate, setPropDate] = useState(true);
  const [propMessage, setPropMessage] = useState(true);
  const [data, setData] = useState('');

  const message = useInput("", {
    isEmpty: true,
    minLength: 10,
    maxLength: 300,
  });
  const date = useInput("", { isEmpty: true });
  const name = useInput("", {
    isEmpty: true,
    minLength: 7,
    maxLength: 61,
    isName: true,
  });
  const phone = useInput("", {
    isEmpty: true,
    minLength: 17,
    maxLength: 17,
    isPhone: true,
  });
  const email = useInput("", {
    isEmpty: true,
    minLength: 5,
    maxLength: 256,
    isEmail: true,
  });

  const validItems =
    name.inputValid &&
    phone.inputValid &&
    email.inputValid &&
    date.inputValid &&
    message.inputValid;

  const handleCloseModal = () => {
    setModalIsOpen(!modalIsOpen);
    setValidForm(false);
    setPropName(true);
    setPropPhone(true);
    setPropEmail(true);
    setPropDate(true);
    setPropMessage(true);
  };

  const handleClick = (event) => {
    event.preventDefault();
    name.onClick();
    phone.onClick();
    email.onClick();
    date.onClick();
    setValidForm(validItems);
    setPropName(name.inputValid);
    setPropDate(date.inputValid);
    setPropPhone(phone.inputValid);
    setPropEmail(email.inputValid);
    setPropMessage(message.inputValid);
    if (validItems) {
      name.submitForm();
      phone.submitForm();
      email.submitForm();
      date.submitForm(event);
      message.submitForm();
      async function sendData(url, data) {
        const response = await fetch(
          url,
          {
            method: "POST",
            headers: {
              Accept: "application/json, text/plain, */*",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );
        if(!response.ok) {
          throw new Error(`Error. Bad data from ${url}, with status ${response.status}`);
        }

        return await response.json();
      }

      const sendFormDate = () => {
        const data = {
          name: name.value,
          email: email.value,
          phone: phone.value,
          birthday: date.value,
          message: message.value,
        };

        sendData('https://jsonplaceholder.typicode.com/todos', data)
            .then((res) => {
              setData(JSON.stringify(res));
            })
            .catch((err) => {
              setData(err);
            })
      }

      sendFormDate();
    }
  };

  return (
    <>
      <ModalWindowForFeedbackWrapper
        modalIsOpen={modalIsOpen}
        onClick={handleCloseModal}
      >
        <ModalSuccessSendMessageContainer
          validForm={validForm}
          handleCloseModal={handleCloseModal}
          handleClick={handleClick}
          data={data}
        />
        <ModalFormForFeedbackContainer
          modalIsOpen={modalIsOpen}
          validForm={validForm}
          setPropName={setPropName}
          setPropPhone={setPropPhone}
          setPropEmail={setPropEmail}
          setPropDate={setPropDate}
          setPropMessage={setPropMessage}
          propDate={propDate}
          propName={propName}
          propPhone={propPhone}
          propEmail={propEmail}
          propMessage={propMessage}
          message={message}
          date={date}
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
