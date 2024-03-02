import React from 'react';
import './RadioInput.scss';

const RadioInput = ({ value, onChange, label, message, htmlFor, ...rest }) => {
  return (
    <>
      <label className='' htmlFor={htmlFor}>
        <input
          type="radio"
          label={label}
          message={message}
          value={value}
          onChange={onChange}
          {...rest}
        />
        <span className='radio-label'>
          {label}
        </span>
      </label>

    </>
  )
}

export default RadioInput