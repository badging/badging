import { NavLink } from 'react-router-dom';
import { arrowRight } from '../../assets/images';
import { useState } from 'react';
import '../../pages/Faq/freq.scss';

const FaqSidebar = () => {
  const [tabIndex, setTabIndex] = useState(1);

  return (
    <div>
      <ul className="faq_sidebar">
        <li>
          <div className="main__link">
            <NavLink
              // exact="true"
              to="/faq"
              style={({ isActive }) => {
                return isActive ? { color: '#d61b5e' } : {};
              }}
              id="event-badging"
              end
              onClick={() => setTabIndex(1)}
            >
              Event Badging
            </NavLink>
          </div>
          {tabIndex == 1
            ? 'Event Badging' && (
                <img className="arr" src={arrowRight} alt="arrow" />
              )
            : 'Event Badging'}
        </li>

        <li>
          <div className="main__link">
            <NavLink
              to="/faqproject"
              style={({ isActive }) => {
                return isActive
                  ? {
                      color: '#d61b5e',
                    }
                  : {};
              }}
              end
              onClick={() => setTabIndex(2)}
            >
              Project Badging
            </NavLink>{' '}
            &nbsp;
          </div>
          {tabIndex == 2
            ? 'Project Badging' && <img src={arrowRight} alt="arrow" />
            : ''}
        </li>
      </ul>

      {/* {tabIndex === 1 && <img src={arrowRight} alt="arrow" />}
      {tabIndex === 2 && <img src={arrowRight} alt="arrow" />} */}
    </div>
  );
};

export default FaqSidebar;
