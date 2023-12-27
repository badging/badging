import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import '../../assets/styles/global.scss';
// import './faq.scss';

const Faq = ({ question, answer }) => {
  const [displayInfo, setDisplayInfo] = useState(false);

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
      <div className="faq-details" onClick={() => setDisplayInfo(!displayInfo)}>
        <div>{question}</div>
        <div>{displayInfo ? '-' : '+'}</div>
      </div>
      {displayInfo && <div>{answer}</div>}
    </>
  );
};

Faq.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default Faq;
