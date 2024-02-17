/* eslint-disable react/prop-types */
import React from 'react';
import './TextField.scss';

// export interface TextFieldProps extends Partial<HTMLInputElement> {
//   onClick?: () => void;
//   error?: boolean;
//   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   success?: boolean;
//   label?: string;
//   inputRef?: string;
//   message?: string;
//   props?: ComponentProps<JSXElementConstructor<any>>;
//   inputClass?: string;
// }
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
        <label style={{ color: error ? '#e11900 ' : '0' }}>{label}</label>
      )}
      <div
        className={[
          className,
          `text__field__container
              ${error ? 'error__border' : '0'}`,
        ].join(' ')}
      >
        <input
          type={type || 'text'}
          className={[
            inputClass,
            'text__field',
            error ? 'error__border' : 'border',
            error ? 'error__border' : '0',
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
