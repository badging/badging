import React, { useState } from 'react';
import PropTypes from 'prop-types';
const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  );
};

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
export default Accordion;
