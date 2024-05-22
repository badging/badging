/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
// import { useForm } from 'react-hook-form';
import "../applyform.scss";
// import { useNavigate } from 'react-router-dom';
import "../../../assets/styles/global.scss";
import { useFormContext } from "react-hook-form";
import { carretDown, carretRight } from "../../../assets/images";

// import { Button as MuiButton } from '@mui/material';
// import { styled } from '@mui/system';
// import { useDesktop } from '../../contexts/DesktopContext';
import { useState } from "react";
// import { Outlet } from 'react-router-dom';

const PageThree = () => {
  // const { isDesktop } = useDesktop();

  const { register } = useFormContext();

  const [showLink, setShowLink] = useState(false);

  return (
    <div className="badge_form">
      <div className="input-wrapper">
        {" "}
        <h4>Inclusive Experience at Event</h4>
        <label htmlFor="inclusiveExp">
          <input
            type="checkbox"
            name="inclusiveExp"
            id="inclusiveExp"
            {...register("inclusiveExp", { required: true })}
          />{" "}
          &nbsp; This event commits to Attendee Diversity & Inclusion.
        </label>{" "}
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

      <div className="input-wrapper">
        <label htmlFor="eventfb">
          Provide an example of the Event Feedback page if available.{" "}
          <span>*</span>
        </label>
        <br /> <br />
        <textarea
          name="eventfb"
          rows="6"
          cols="75"
          type="text"
          placeholder="Enter your answer here"
          id="eventfb"
          className="input_text"
          {...register("eventfb", { required: true })}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="prevfb">
          Is the event team using feedback from previous event`s attendees,
          speakers, and volunteers to improve DEI at this event? .<span>*</span>
        </label>{" "}
        <br /> <br />
        <textarea
          name="prevfb"
          rows="6"
          cols="75"
          type="textarea"
          placeholder="Enter your answer here"
          className="input_text"
          id="prevfb"
          {...register("prevfb", { required: true })}
        />
        <br />
        <p className="suffix-text">If so, provide an example.</p>
      </div>
      <div className="input-wrapper">
        <label htmlFor="futurefb">
          Does the event team plan to use feedback from this event`s attendees,
          speakers, and volunteers to improve DEI at future events?
          <span>*</span>
        </label>{" "}
        <br /> <br />
        <textarea
          name="futurefb"
          rows="6"
          cols="75"
          type="textarea"
          placeholder="Enter your answer here"
          className="input_text"
          id="futurefb"
          {...register("futurefb", { required: true })}
          aria-required
        />
        <br />
        <p className="suffix-text">
          If so, provide a summary of the strategy involved.
        </p>
      </div>

      <div className="input-wrapper">
        <label htmlFor="accesslearn">
          How can attendees learn more about accessibility at the event?
          <span>*</span>
        </label>{" "}
        <br /> <br />
        <textarea
          name="accesslearn"
          rows="6"
          cols="75"
          type="textarea"
          placeholder="Enter your answer here"
          className="input_text"
          id="accesslearn"
          {...register("accesslearn", { required: true })}
        />{" "}
        <br />
      </div>
      <div className="input-wrapper">
        <label htmlFor="accsuggest">
          Does the event platform allow attendees to suggest future
          accomodations for the event?<span>*</span>
        </label>{" "}
        <br /> <br />
        <textarea
          name="accsuggest"
          rows="6"
          cols="75"
          type="textarea"
          placeholder="Enter your answer here"
          className="input_text"
          id="accsuggest"
          aria-required
          {...register("accsuggest", { required: true })}
        />{" "}
        <br />
        <p className="suffix-text">If yes, provide the process.</p>
      </div>
      <div className="input-wrapper">
        <label htmlFor="futureaccess">
          Will the event platform be accessible to attendees and speakers after
          the event?<span>*</span>
        </label>{" "}
        <br /> <br />
        <textarea
          name="futureaccess"
          rows="6"
          cols="75"
          type="textarea"
          placeholder="Enter your answer here"
          className="input_text"
          id="futureaccess"
          {...register("futureaccess", { required: true })}
        />{" "}
        <br />
        <p className="suffix-text">If yes, provide the name of the platform.</p>
      </div>
      {/* <div className="submit-button">
      <button
        disabled={!isDirty}
        type="submit"
        className="submit-button"
        style={{ background: isDirty ? 'red' : 'blue' }}
      >
        Next(1/6)
      </button>
    </div> */}

      <div className="criteria">
        <p>CRITERIA:</p>
        <p>
          <span>Speaker Inclusivity: </span>
          The Event requests feedback from speakers regarding Diversity &
          Inclusion.
        </p>
        <p>
          <span>Attendee Inclusivity: </span>
          The Event requests feedback from attendees regarding Diversity &
          Inclusion.
        </p>
        <p>
          <span>Retention: </span>
          The Event incorporates feedback from past events, or has a strategy to
          incorporate feedback into future iterations of the event.
        </p>
        <p>
          <span>Accessibility request: </span>
          Attendees are able to inquire if accomodations are available and make
          suggestions for future accomodations at events.
        </p>
        <p>
          <span> Session Accessibility: </span>
          Event attendees are able to access the event platform after the event.
        </p>
      </div>
    </div>
  );
};

export default PageThree;
