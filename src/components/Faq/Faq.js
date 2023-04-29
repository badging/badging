import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import "../../assets/styles/global.scss";
import "./faq.scss";

const Faq = ({ question, answer }) => {
  const [displayInfo, setDisplayInfo] = useState(false);

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
      <div className="faq-details" onClick={() => setDisplayInfo(!displayInfo)}>
        <p>
          {question}
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8965 18.7199V10.7999H18.7205V7.91994H10.8965V-6.10352e-05H7.82449V7.91994H0.000488281V10.7999H7.82449V18.7199H10.8965Z"
              fill="white"
            />
          </svg>
        </p>
        <p>{displayInfo && answer}</p>
      </div>
    </>
  );
};

Faq.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default Faq;
