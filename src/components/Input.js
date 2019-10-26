import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const propTypes = {
  containerClassName: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  inputClassName: PropTypes.string,
  label: PropTypes.string,
  labelClassName: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.oneOf(["text", "number", "tel", "email"]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func
};

const defaultProps = {
  type: "text",
  containerClassName: "",
  labelClassName: "",
  inputClassName: ""
};
function Input(props) {
  const { id, label } = props;

  let {
    containerClassName,
    labelClassName,
    inputClassName,
    ...inputProps
  } = props;

  containerClassName = classNames("form-input__wrapper", containerClassName);
  labelClassName = classNames("form-input__label", labelClassName);
  inputClassName = classNames("form-input", inputClassName);

  return (
    <div className={containerClassName}>
      {label && (
        <label htmlFor={id} className={labelClassName}>
          {label}
        </label>
      )}
      <input {...inputProps} className={inputClassName} />
    </div>
  );
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
