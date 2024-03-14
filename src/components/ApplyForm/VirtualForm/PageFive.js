// import { useNavigate } from 'react-router-dom';
import '../../../assets/styles/global.scss';
import '../applyform.scss';
import { useFormContext } from 'react-hook-form';
import { carretDown, carretRight } from '../../../assets/images';

import { useState } from 'react';
const PageFive = () => {
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
        <h4>Code of Conduct at Event</h4>
        <label htmlFor="eventCode">
          <input
            type="checkbox"
            name="eventCode"
            id="eventCode"
            {...register('eventCode', { required: true })}
          />{' '}
          &nbsp; This event commits to the Code of Conduct at Event.
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
            <br />
            <a href="https://chaoss.community/metrics-for-event-organizers/">
              CHAOSS Metric Document
            </a>
            <br />
            <a href="https://chaoss.community/metrics-for-event-organizers/">
              CHAOSS Metric Document
            </a>
          </div>
        )}
      </div>
      <div className="radio-input">
        <p>
          Is the code of conduct posted at Event venue?<span>*</span>
        </p>
        <label htmlFor="codeposted">
          <input
            type="radio"
            value="codeposted"
            id="codeposted"
            name="codeposted"
            {...register('codePosted', { required: true || false })}
            className="radio-input"
          />
          Yes
        </label>
        &nbsp;
        <label htmlFor="codenotposted">
          <input
            type="radio"
            value="codenotposted"
            id="codenotposted"
            name="codenotposted"
            {...register('codePosted', { required: true || false })}
            className="radio-input"
          />
          No
        </label>
      </div>
      <div className="input-wrapper ">
        <label htmlFor="conductlink">
          Provide link for the Event Code of Conduct<span>*</span>
        </label>{' '}
        <br /> <br />
        <input
          type="text"
          placeholder="Enter your answer here"
          className="input_text"
          id="conductlink"
          name="conductlink"
          {...register('conductLink', { required: true })}
        />{' '}
        <br />
      </div>

      <div className="criteria">
        <p>CRITERIA:</p>
        <p>
          <span>Findability: </span>
          It is possible to find the Code of Conduct on the Event website.
        </p>
        <p>
          <span>Clarity: </span>
          Event Code of Conduct provides a definition of expected behaviour.
        </p>
        <p>
          <span>Reporting venue: </span>
          The event has a venue for reporting violations of the CoC at the event
          website.
        </p>
        <p>
          <span>Support at Event: </span>
          The Event Code of Conduct provided information about possible methods
          to provide support to victims of inappropriate behavior.
        </p>
        <p>
          <span> Enforcement: </span>
          The participants in the Event are required to accept the Code of
          Conduct.
        </p>
      </div>
    </div>
  );
};

export default PageFive;
