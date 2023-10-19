import { useState, useCallback } from "react";
import validate, { isString } from '../utils/validation-rules';

const UseMultiSelect = (initialValue = [],
  validateRule = 'select',
  optionLabel = 'label',
  optionValue = 'value',
  submitted) => {
  const [options, setOptions] = useState([]);
  const [value, setValue] = useState(initialValue);
  const [validator, setValidator] = useState(() => validate(validateRule, initialValue));

  const handleOnChange = useCallback((value, event) => {
    if (event.action === "select-option" && event.option.value === null) {
      setValue(options);
    } else if (
      event.action === "deselect-option" &&
      event.option.value === null
    ) {
      setValue([]);
    } else if (event.action === "deselect-option") {
      setValue(value.filter((o) => o.value !== null));
    } else if (value.length === options.length - 1) {
      setValue(options);
    } else {
      setValue(value);
    }
  }, [options, setValue, setValidator, validateRule]);

  const reset = useCallback(() => {
    let value = isString(initialValue) ? initialValue.trim() : initialValue;
    setValidator(validate(validateRule, value));
    setValue(value);
  }, [setValue, setValidator, validateRule, initialValue]);

  const changeValue = useCallback(inputValue => {
    setValidator(validate(validateRule, Array.isArray(inputValue) ? true : (inputValue?.value || inputValue?.id)));
    setValue(inputValue);
  }, [setValue, setValidator, validateRule]);

  const handleSetOptions = useCallback(options => {
    if (options?.length > 0) {
      setOptions(options.map(c => {
        return {
          ...c,
          label: c[optionLabel],
          value: c[optionValue]
        }
      }))
    }
  }, [optionLabel, optionValue, setOptions]);

  const setError = message => {
    const valid = !message;
    setValidator({ valid, message });
  };

  return {
    setOptions: handleSetOptions,
    value,
    changeValue,
    isValid: validator && validator.valid,
    reset,
    setError,
    bind: {
      value,
      options,
      onChange: handleOnChange,
      setState: setValue,
      validator,
      submitted
    }
  };
};

export default UseMultiSelect;