import { useState, useEffect } from "react";

const useValidation = (value, validations) => {
  const [isEmpty, setEmpty] = useState(true);
  const [minLengthError, setMinLengthError] = useState(false);
  const [maxLengthError, setMaxLengthError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [inputValid, setInputValid] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case "isName":
          const name = /[a-zA-Z]{3,30}\s[a-zA-Z]{3,30}$/gi;
          name.test(String(value)) ? setNameError(false) : setNameError(true);
          break;
        case "minLength":
          value.length < validations[validation]
            ? setMinLengthError(true)
            : setMinLengthError(false);
          break;
        case "maxLength":
          value.length > validations[validation]
            ? setMaxLengthError(true)
            : setMaxLengthError(false);
          break;
        case "isEmpty":
          value ? setEmpty(false) : setEmpty(true);
          break;
        case "isPhone":
          const phone = /[\+\s?\(?\)?\s?\-?\d]{17}$/g;
          phone.test(String(value))
            ? setPhoneError(false)
            : setPhoneError(true);
          break;
        case "isEmail":
          const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          re.test(String(value).toLowerCase())
            ? setEmailError(false)
            : setEmailError(true);
          break;
        default:
          break;
      }
    }
  }, [validations, value]);

  useEffect(() => {
    if (
      isEmpty ||
      minLengthError ||
      maxLengthError ||
      emailError ||
      phoneError ||
      nameError
    ) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [
    isEmpty,
    minLengthError,
    maxLengthError,
    emailError,
    phoneError,
    nameError,
  ]);

  return {
    isEmpty,
    minLengthError,
    maxLengthError,
    emailError,
    inputValid,
    phoneError,
    nameError,
  };
};

export const useInput = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setDirty] = useState(false);
  const valid = useValidation(value, validations);
  const [startDate] = useState();

  const submitForm = () => {
    setValue('');
    const date = document.getElementById('Date');
    date.valueAsDate = null;

  }

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const dateOnChange = (event) => {
    setValue(event.target.value.replace(/[a-zA-Z\s]/gi, ""));
  };

  const nameOnChange = (event) => {
    setValue(event.target.value.replace(/[^a-zA-Z\s]/g, ""));
  };

  const onClick = () => {
    setDirty(true);
  };

  const onBlur = () => {
    setDirty(true);
  };

  return {
    value,
    onChange,
    dateOnChange,
    nameOnChange,
    onBlur,
    onClick,
    isDirty,
    ...valid,
    submitForm,
    startDate
  };
};
