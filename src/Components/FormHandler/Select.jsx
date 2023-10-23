import React from 'react'
import ReactSelect from 'react-select'
import AsyncSelect from 'react-select/async'

// eslint-disable-next-line react/display-name
const Select = React.forwardRef((props, ref) => {
  const {
    label,
    validator,
    mandatory,
    width,
    height,
    submitted,
    isMulti = false,
    formGroup = true,
    small = false,
    async = false,
    autoHeight = false,
    className = '',
    cacheOptions = true } = props;

  let hasWarning = submitted && validator && !validator.valid;

  return (
    <div className={`${formGroup ? 'form-group' : ''} ${hasWarning ? 'has-warning' : ''}`}>
      {label && <label className="form-label">{label} {mandatory && <span className="text-danger">*</span>}</label>}
      {!async && <ReactSelect
        ref={ref}
        styles={selectStyles(small, autoHeight)}
        isMulti={isMulti}
        placeholder="اختر"
        width
        height
        // menuPlacement='اختر'
        
        className={`react-select ${className} ${(submitted && validator && !validator.valid) ? 'is-invalid' : ''}`}
        {...props}
      />}
      {async && <AsyncSelect
        ref={ref}
        //  menuPlacement='اختر'
        placeholder="اختر"
        styles={selectStyles(small)}
        isMulti={isMulti}
        width
        height
        className={`react-select ${className} ${(submitted && validator && !validator.valid) ? 'is-invalid' : ''}`}
        {...props}
       
        cacheOptions={cacheOptions}
        defaultOptions={[]}
      />}

      {hasWarning && <small className="invalid-feedback">{validator.message}</small>}
    </div>
  );
});


const selectStyles = (small, autoHeight) => {
  const height = autoHeight ? 'auto' : small ? '30px' : '41.90px';

  let options = {
    control: (styles) => ({
      ...styles,
      borderColor: '#dee2e6',
      borderRadius: '0.25rem',
      height: height,
      minHeight: height,
      cursor: 'pointer'
    }),
    option: (styles) => ({ ...styles, cursor: 'pointer' }),
    placeholder: (styles) => ({ ...styles, color: '#999' })
  }
  if (small) {
    options = {
      ...options,
      ...{
        dropdownIndicator: base => ({
          ...base,
          padding: 4
        }),
        clearIndicator: base => ({
          ...base,
          padding: 4
        }),
        valueContainer: base => ({
          ...base,
          padding: '0px 6px'
        }),
        input: base => ({
          ...base,
          margin: 0,
          padding: 0
        })
      }
    }
  }

  return options;
};


export default Select
 