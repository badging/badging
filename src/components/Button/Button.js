/* eslint-disable react/prop-types */
import React from 'react';
import './Button.scss';

const Button = ({className, onClick, children, disabled, ...rest}) => {
  return (
    <button className={`${className} btn btn-primary`} disabled={disabled} children={children} onClick={onClick} {...rest}>
        {children}
    </button>
  )
}

export default Button