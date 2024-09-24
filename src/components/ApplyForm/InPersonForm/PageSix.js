import '../applyform.scss';
// import { useNavigate } from 'react-router-dom';
import '../../../assets/styles/global.scss';
import { useFormContext } from 'react-hook-form';
import { carretDown, carretRight } from '../../../assets/images';

import { useState } from 'react';
const PageSix = () => {
  const { register } = useFormContext();
  const [showLink, setShowLink] = useState(false);

  // const objectStyle = {
  //   color: 'blue',
  //   backgroundColor: 'red',
  //   padding: '10px',
  // };
  // const objectStyleValid = {
  //   color: 'Red',
  //   backgroundColor: 'green',
  //   padding: '10px',
  // };

  return (
    <div className="badge_form">
      <div className="input-wrapper">
        {' '}
        <h4>Family Friendliness</h4>
        <label htmlFor="famCheck">
          <input
            type="checkbox"
            name="famCheck"
            id="famCheck"
            {...register('famCheck', { required: true })}
          />{' '}
          &nbsp; This event commits to the Diversity Access Tickets.
        </label>{' '}
        <br />
        <button
          type="button"
          className="reference"
          onClick={(e) => {
            e.preventDefault();
            setShowLink(!showLink);
          }}
        >
          References
          {showLink ? (
            <span id="reft">
              <img
                src={carretDown}
                width={35}
                height={35}
                alt="carret-icon"
                className="carret"
              />
            </span>
          ) : (
            <span id="reft">
              <img
                src={carretRight}
                width={35}
                height={35}
                alt="carret-icon"
                className="carret"
              />
            </span>
          )}
        </button>
        <br />
        {showLink && (
          <div>
            <a href="https://chaoss.community/metrics-for-event-organizers/">
              CHAOSS Metric Document
            </a>
          </div>
        )}
      </div>

      <div className="input-wrapper ">
        <label htmlFor="childcare">
          Does the Event provide childcare facilities for its attendees and
          speakers?<span>*</span>
        </label>{' '}
        <br /> <br />
        <textarea
          className="input_text"
          id="childcare"
          type="text"
          name="childcare"
          placeholder="Enter your answer here"
          {...register('childcare', { required: true })}
          rows="6"
          cols="75"
        />{' '}
        <br />
      </div>
      <div className="input-wrapper ">
        <label htmlFor="familyEnviron">
          What are the other ways that a family-friendly environment is being
          created in the Event?
          <span>*</span>
        </label>{' '}
        <br /> <br />
        <textarea
          className="input_text"
          id="familyEnviron"
          type="text"
          name="familyEnviron"
          placeholder="Enter your answer here"
          {...register('familyEnviron', { required: true })}
          rows="6"
          cols="75"
        />{' '}
        <br />
      </div>
      <div className="input-wrapper ">
        <label htmlFor="famLink">
          Provide link for the Event Code of Conduct<span>*</span>
        </label>{' '}
        <br /> <br />
        <input
          type="text"
          placeholder="Enter your answer here"
          className="input_text"
          id="famLink"
          name="famLink"
          {...register('famLink', { required: true })}
        />{' '}
        <br />
      </div>

      <div className="criteria">
        <p>CRITERIA:</p>
        <p>
          <span> Availability: </span>
          The Event provides one or more services/facilities for families.
        </p>
        <p>
          <span>Ticket allocation: </span>
          The information about the family friendly services provided at the
          Event is easy to find on the website.
        </p>
      </div>
      <div className="submit-info">
        <p>
          {' '}
          Once you click `submit`, you must use your GitHub account to finalize
          the issue on their Website by clicking `Create New Issue`.
        </p>
      </div>
    </div>
  );
};

export default PageSix;
