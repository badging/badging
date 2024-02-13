import { useNavigate } from 'react-router-dom';
import { arrowRight } from '../../assets/images';
import { useState } from 'react';
import '../../pages/Faq/freq.scss';

const FaqSidebar = () => {
  const [showAbout, setShowAbout] = useState('event');

  const navigate = useNavigate();

  const eventHandler = (event) => {
    setShowAbout(event);
  };

  return (
    <div>
      <ul className="faq_sidebar">
        <li
          onClick={() => {
            eventHandler('event');
            navigate('/faq');
          }}
          className={showAbout == 'event' ? 'aboutEventHeader' : ''}
        >
          Event Badging
          {showAbout == 'event' && <img src={arrowRight} alt="arrow" />}{' '}
        </li>

        <li
          onClick={() => {
            eventHandler('faqproject');
            navigate('/faqproject');
          }}
          className={showAbout == 'faqproject' ? 'aboutEventHeader' : ''}
        >
          Project Badging
          {showAbout == 'faqproject' && <img src={arrowRight} alt="arrow" />}
        </li>
      </ul>
    </div>
  );
};

export default FaqSidebar;
