import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import '../../assets/styles/global.scss';
import '../../pages/Faq/faq.scss';

const Faq = ({ question, answer }) => {
  const [displayInfo, setDisplayInfo] = useState(false);

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
      <div className="faq-details" onClick={() => setDisplayInfo(!displayInfo)}>
        <p>
          {question}
          {displayInfo ? (
            <svg
              width="15"
              height="10"
              viewBox="0 0 15 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.53148 0.999985L0.411484 7.11999C-0.108516 7.63999 -0.108516 8.47999 0.411484 8.99999C0.931484 9.51999 1.77148 9.51999 2.29148 8.99999L7.47815 3.82665L12.6515 8.99999C13.1715 9.51999 14.0115 9.51999 14.5315 8.99999C15.0515 8.47999 15.0515 7.63999 14.5315 7.11999L8.41148 0.999985C7.90482 0.479985 7.05148 0.479985 6.53148 0.999985Z"
                fill="#222D33"
              />
            </svg>
          ) : (
            <svg
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.1987 12.5084L16.0254 17.6817L10.852 12.5084C10.332 11.9884 9.49203 11.9884 8.97203 12.5084C8.45203 13.0284 8.45203 13.8684 8.97203 14.3884L15.092 20.5084C15.612 21.0284 16.452 21.0284 16.972 20.5084L23.092 14.3884C23.612 13.8684 23.612 13.0284 23.092 12.5084C22.572 12.0017 21.7187 11.9884 21.1987 12.5084Z"
                fill="#222D33"
              />
            </svg>
          )}
        </p>
        <p className={`toggleAnswer ${displayInfo ? 'openAnswer' : ''}`}>
          {displayInfo && answer}
        </p>
      </div>
    </>
  );
};

Faq.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default Faq;
