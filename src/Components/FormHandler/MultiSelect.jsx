import React from "react";
import ReactMultiSelectCheckboxes from "react-multiselect-checkboxes";

const MultiSelect = ({
  placeholderButtonLabel = 'Select',
  formGroup = true,
  label,
  validator,
  mandatory,
  submitted,
  className,
  ...props
}) => {
  const lang = "en";
  let hasWarning = submitted && validator && !validator.valid;
  function getDropdownButtonLabel({ placeholderButtonLabel, value }) {
    if (value && value.some((o) => o.value === null)) {
      return `${placeholderButtonLabel}: All`;
    }
    if (value.length === 1 && value[0].label) return value[0].label;
    return `${placeholderButtonLabel}: ${value?.length} Selected`;
  }

  return (
    <div className={`${formGroup ? 'form-group' : ''} ${hasWarning ? 'has-warning' : ''} multi-select ${className ? className : ''}`}>
      {label && <label className="form-label">{label} {mandatory && <span className="text-danger">*</span>}</label>}
      <ReactMultiSelectCheckboxes
        placeholderButtonLabel={placeholderButtonLabel}
        getDropdownButtonLabel={getDropdownButtonLabel}
        rightAligned={lang == 'ar'}
        {...props}
        placeholder={"Search"}
      />
      {hasWarning && <small className="invalid-feedback">{validator.message}</small>}
    </div>
  );
};


export default MultiSelect;