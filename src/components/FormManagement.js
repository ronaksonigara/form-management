import React, { useState } from "react";

import Form from "./Form";
import Input from "./Input";
import { validateEmail, validateMobile, validateAge } from "../validation";

function FormManagement(props) {
  const [validation, setValidaton] = useState({
    email: {
      isValid: true,
      errMessage: ""
    },
    mobile: {
      isValid: true,
      errMessage: ""
    },
    age: {
      isValid: true,
      errMessage: ""
    }
  });

  const [inputValue, setInputValue] = useState({
    email: "",
    mobile: "",
    age: ""
  });

  const [isSubmit, setSubmit] = useState(false);

  const handleFormSubmit = event => {
    event.preventDefault();
    const email = validateEmail(inputValue.email);
    const mobile = validateMobile(inputValue.mobile);
    const optionalAge =
      inputValue.email.indexOf("gmail.com") !== -1 ? "" : "optional";

    const age = validateAge(inputValue.age, optionalAge);
    handleEmailVaidation();
    handleMobileValidation();
    if (inputValue.email.indexOf("gmail.com") !== -1) {
      handleAgeValidation();
    }
    if (email.isValid && mobile.isValid && age.isValid) {
      setSubmit(true);
    } else {
      setSubmit(false);
    }
  };
  const handleChange = event => {
    setSubmit(false);
    const { name, value } = event.target;
    setInputValue(prevState => ({ ...prevState, [name]: value }));
  };

  const formOutput = data => {
    return Object.keys(data).map(item => {
      let element = inputValue[item] ? (
        <li className="form-data-item" key={item}>
          {item.toUpperCase()}: {inputValue[item]}
        </li>
      ) : (
        ""
      );
      return element;
    });
  };

  const handleEmailVaidation = event => {
    const email = validateEmail(inputValue.email);
    setValidaton(prevState => ({
      ...prevState,
      email
    }));
  };

  const handleMobileValidation = event => {
    const mobile = validateMobile(inputValue.mobile);
    setValidaton(prevState => ({
      ...prevState,
      mobile
    }));
  };

  const handleAgeValidation = event => {
    const age = validateAge(inputValue.age);
    setValidaton(prevState => ({
      ...prevState,
      age
    }));
  };

  return (
    <>
      <Form onSubmit={handleFormSubmit}>
        <Form.FormItem
          validateStatus={validation.email.isValid ? "" : "error"}
          helperText={validation.email.errMessage}
        >
          <Input
            label="Email:"
            id="email"
            name="email"
            type="email"
            onChange={handleChange}
            onBlur={handleEmailVaidation}
          />
        </Form.FormItem>
        <Form.FormItem
          validateStatus={validation.mobile.isValid ? "" : "error"}
          helperText={validation.mobile.errMessage}
        >
          <Input
            label="Mobile:"
            id="mobile"
            name="mobile"
            type="number"
            maxLength={10}
            onChange={handleChange}
            onBlur={handleMobileValidation}
          />
        </Form.FormItem>
        {inputValue.email.indexOf("gmail.com") !== -1 && (
          <Form.FormItem
            validateStatus={validation.age.isValid ? "" : "error"}
            helperText={validation.age.errMessage}
          >
            <Input
              label="Age:"
              id="age"
              name="age"
              type="number"
              maxLength={2}
              onChange={handleChange}
              onBlur={handleAgeValidation}
            />
          </Form.FormItem>
        )}
        <Form.FormItem>
          <button className="form-submit__btn">Submit</button>
        </Form.FormItem>
      </Form>
      {isSubmit && (
        <ul className="form-data__wrapper">{formOutput(inputValue)}</ul>
      )}
    </>
  );
}

export default FormManagement;
