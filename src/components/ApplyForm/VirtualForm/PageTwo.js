/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
// import { useForm } from 'react-hook-form';
import '../applyform.scss';

import '../../../assets/styles/global.scss';
import { useFormContext } from 'react-hook-form';
import { carretDown, carretRight } from '../../../assets/images';

// import { useDesktop } from '../../contexts/DesktopContext';
import { useState } from 'react';
// import { Outlet } from 'react-router-dom';

const PageTwo = () => {
  // const { isDesktop } = useDesktop();

  const { register } = useFormContext();
  const [showLink, setShowLink] = useState(false);

  return (
    <div className="badge_form">
      <div className="input-wrapper mb-0">
        {' '}
        <h4>Event Demographics</h4>
        <label className='text-sm' htmlFor="demographics">
          <input
            type="checkbox"
            name="demographics"
            id="demographics"
            aria-required
            {...register('demographics', { required: true })}
          />{' '}
          &nbsp; This event commits to Speaker Diversity & Inclusion.
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
            </a>{' '}
            <br />
            <a href="https://chaoss.community/metrics-for-event-organizers/">
              CHAOSS Metric Document
            </a>{' '}
            <br />
            <a href="https://chaoss.community/metrics-for-event-organizers/">
              CHAOSS Metric Document
            </a>{' '}
          </div>
        )}
      </div>

      <div className="input-wrapper">
        <label htmlFor="eventDemographics">
          Detail the process for measuring Event Demographics.
          <span>*</span>
        </label>
        <br /> <br />
        <textarea
          name="eventDemographics"
          rows="6"
          cols="75"
          type="text"
          placeholder="Enter your answer here"
          id="eventDemographics"
          className="input_text"
          {...register('eventDemographics', { required: true })}
        />
      </div>
      <div className="input-wrapper mb-0">
        <label htmlFor="optOut">
          Provide an example of an opt-out option on the Event registration page
          if available.<span>*</span>
        </label>{' '}
        <br /> <br />
        <textarea
          className="input_text"
          id="optOut"
          type="textarea"
          name="optOut"
          placeholder="Enter your answer here"
          rows="6"
          cols="75"
          {...register('optOut', { required: true })}
        />
        <br />
        <p className="suffix-text">
          For example, the option of `Prefer not to answer`.
        </p>
      </div>

      <div className="input-wrapper">
        <label htmlFor="demoText">
          Provide an example of a demographics text input box on the Event
          registration page if available.
          <span>*</span>
        </label>{' '}
        <br /> <br />
        <textarea
          name="demoText"
          rows="6"
          cols="75"
          type="textarea"
          placeholder="Enter your answer here"
          className="input_text"
          id="demoText"
          {...register('demoText', { required: true })}
        />{' '}
        <br />
        <p className="suffix-text">
          For example, an alternative identity input for gender.
        </p>
      </div>

      <div className="criteria">
        <p>CRITERIA:</p>
        <p>
          <span>Measuring Demographics: </span>
          This event commits to Speaker Diversity & Inclusion.
        </p>
        <p>
          <span>Opt-Out: </span>
          The Event provides an opportunity to opt-out of providing demographic
          data.
        </p>
        <p>
          <span>Text Input: </span>
          The Event provides a text box to input certain data such as Gender,
          Race, or Ethnicity.
        </p>
      </div>
    </div>
  );
};

export default PageTwo;
