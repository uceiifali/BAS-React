import React from "react";
import { useForm } from "react-hook-form";

const Input = ({
  label,
  validator,
  submitted,
  mandatory,
  className = "",
  classNameWrap = "",
  formGroup = true,
  disabled = false,
  type = "text",
  required = false,
  width = "",
  height = "",
  append = "",
  prepend = "",
  background = "",
  name,
  borderColor = "#dee2e6",
  ...props
}) => {
  let hasWarning = submitted && validator && !validator.valid;

  return (
    <div
      className={`${formGroup ? "form-group" : ""} ${
        hasWarning ? "has-warning" : ""
      } ${classNameWrap} ${append || prepend ? "input-group" : ""}`}
    >
      {label && (
        <label className="form-label">
          {label} {mandatory && <span className="text-danger">*</span>}
        </label>
      )}
      {prepend && (
        <div className="input-group-prepend">
          <span className="input-group-text">{prepend}</span>
        </div>
      )}
      <input
        type={type}
        style={{ height, width, backgroundColor: background, borderColor }}
        disabled={disabled}
        className={`form-control h-[37px] ${className} ${
          submitted && validator && !validator.valid ? "is-invalid" : ""
        }`}
        {...props}
      />
      {append && (
        <div className="input-group-append">
          <span className="input-group-text">{append}</span>
        </div>
      )}
      {hasWarning && (
        <small className="invalid-feedback">{validator.message}</small>
      )}
    </div>
  );
};

export default Input;
