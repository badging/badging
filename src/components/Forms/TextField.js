/* eslint-disable react/prop-types */
import React from 'react';
import './TextField.scss';

const TextField = ({
  type,
  placeholder,
  value,
  onClick,
  error,
  className,
  onChange,
  name,
  label,
  inputRef,
  message,
  inputClass,
  disabled,
  ...props
}) => {
  return (
    <div className={`field__container`}>
      {label && (
        <label style={{ color: error ? '#e11900 ' : '#000000', fontSize: "16px", marginBottom: "8px", display: "block" }}>
          <>
            {label} {<span style={{ color: '#e11900' }}>*</span>}
          </>
        </label>
      )}
      <div
        className={[
          className,
          `text__field__container
              ${error ? 'error__border' : 'border'}`,
        ].join(' ')}
      >
        <input
          type={type || 'text'}
          className={[
            inputClass,
            'text__field',
            error ? 'error__border' : 'border',
            error ? 'error__border' : 'border',
          ].join(' ')}
          placeholder={placeholder || 'Enter a value'}
          value={value}
          onClick={onClick}
          onChange={onChange}
          name={name}
          disabled={disabled}
          ref={inputRef}
          {...props}
        />
      </div>
      {error && <small style={{ color: '#e11900' }}>{message}</small>}
    </div>
  );
};

export default TextField;
