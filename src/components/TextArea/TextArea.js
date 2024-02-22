import React from 'react';
import './TextArea.scss';

const TextArea = ({ rows, cols, placeholder, label, ...rest }) => {
    return (
        <>
            <label>{label} <span style={{ color: "#D61B5E" }}>*</span></label>
            <textarea rows={rows} cols={cols} placeholder={placeholder} style={{ width: "100%", color: "#BEBEBE" }} {...rest}>
            </textarea>
        </>
    )
}

export default TextArea