/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
// import { useForm } from 'react-hook-form';
import "../applyform.scss";
// import { useNavigate } from 'react-router-dom';
import "../../../assets/styles/global.scss";
import { useFormContext } from "react-hook-form";

const PageThree = () => {
  // const { isDesktop } = useDesktop();

  const { register } = useFormContext();

  return (
    <div className="badge_form">
      <div className="input-wrapper mb-0">
        {" "}
        <h4>Inclusive Experience at Event</h4>
        <label className="text-sm" htmlFor="inclusiveExp">
          <input
            type="checkbox"
            name="IEEV"
            id="inclusiveExp"
            {...register("IEEV", { required: true })}
          />{" "}
          &nbsp; This event commits to improving the inclusive experience at the
          event.
        </label>{" "}
        <br />
        <br />
        <div>
          <a
            className="ev-link"
            href="https://chaoss.community/kb/metric-inclusive-experience-at-event/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Metric: Inclusive Experience at Event
          </a>
        </div>
      </div>

      <div className="input-wrapper">
        <label htmlFor="eventfb">
          Provide an example of the Event Feedback page if available.
        </label>
        <br /> <br />
        <textarea
          name="IEEV1"
          rows="6"
          cols="75"
          type="text"
          placeholder="Enter your answer here"
          id="eventfb"
          className="input_text"
          {...register("IEEV1", { required: true })}
        />
      </div>
      <div className="input-wrapper mb-0">
        <label htmlFor="prevfb">
          Is the event team using feedback from previous event`s attendees,
          speakers, and volunteers to improve DEI at this event? .
        </label>{" "}
        <br /> <br />
        <textarea
          name="IEEV2"
          rows="6"
          cols="75"
          type="textarea"
          placeholder="Enter your answer here"
          className="input_text"
          id="prevfb"
          {...register("IEEV2", { required: true })}
        />
        <br />
        <p className="suffix-text">If so, provide an example.</p>
      </div>
      <div className="input-wrapper mb-0">
        <label htmlFor="futurefb">
          Does the event team plan to use feedback from this event`s attendees,
          speakers, and volunteers to improve DEI at future events?
        </label>{" "}
        <br /> <br />
        <textarea
          name="IEEV3"
          rows="6"
          cols="75"
          type="textarea"
          placeholder="Enter your answer here"
          className="input_text"
          id="futurefb"
          {...register("IEEV3", { required: true })}
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
        </label>{" "}
        <br /> <br />
        <textarea
          name="IEEV4"
          rows="6"
          cols="75"
          type="textarea"
          placeholder="Enter your answer here"
          className="input_text"
          id="accesslearn"
          {...register("IEEV4", { required: true })}
        />{" "}
        <br />
      </div>
      <div className="input-wrapper mb-0">
        <label htmlFor="accsuggest">
          Does the event platform allow attendees to suggest future
          accomodations for the event?
        </label>{" "}
        <br /> <br />
        <textarea
          name="IEEV5"
          rows="6"
          cols="75"
          type="textarea"
          placeholder="Enter your answer here"
          className="input_text"
          id="accsuggest"
          aria-required
          {...register("IEEV5", { required: true })}
        />{" "}
        <br />
        <p className="suffix-text">If yes, provide the process.</p>
      </div>
      <div className="input-wrapper">
        <label htmlFor="futureaccess">
          Will the event platform be accessible to attendees and speakers after
          the event?
        </label>{" "}
        <br /> <br />
        <textarea
          name="IEEV6"
          rows="6"
          cols="75"
          type="textarea"
          placeholder="Enter your answer here"
          className="input_text"
          id="futureaccess"
          {...register("IEEV6", { required: true })}
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
