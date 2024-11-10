import "../applyform.scss";
// import { useNavigate } from 'react-router-dom';
import "../../../assets/styles/global.scss";
import { useFormContext } from "react-hook-form";

const PageSeven = () => {
  const { register } = useFormContext();

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
      <div className="input-wrapper mb-0">
        {" "}
        <h4>Event Accessibility</h4>
        <label htmlFor="eventAccess">
          <input
            type="checkbox"
            name="EAV"
            id="eventAccess"
            {...register("EAV")}
          />{" "}
          &nbsp;This event commits to Event Accessibility.
        </label>{" "}
        <br />
        <br />
        <div>
          <a
            className="ev-link"
            href="https://chaoss.community/kb/metric-event-accessibility/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Metric: Event Accessibility
          </a>
        </div>
      </div>

      <div className="input-wrapper ">
        <label htmlFor="closeCaption">
          Is a form of closed-captioning provided?
        </label>{" "}
        <br /> <br />
        <textarea
          className="input_text"
          id="closeCaption"
          type="text"
          name="EAV1"
          placeholder="Enter your answer here"
          {...register("EAV1")}
          rows="6"
          cols="75"
        />{" "}
        <br />
      </div>
      <div className="input-wrapper ">
        <label htmlFor="accomodations">
          Does the Event provide other accessibility accommodations, or will
          upon request?
        </label>{" "}
        <br /> <br />
        <textarea
          className="input_text"
          id="accomodations"
          type="text"
          name="EAV2"
          placeholder="Enter your answer here"
          {...register("EAV2")}
          rows="6"
          cols="75"
        />{" "}
        <br />
      </div>
      <div className="input-wrapper ">
        <label htmlFor="eventLink">
          Provide relevant links related to event accessibility at the Event
        </label>{" "}
        <br /> <br />
        <input
          type="text"
          placeholder="Enter your answer here"
          className="input_text"
          id="eventLink"
          name="EAV3"
          {...register("EAV3")}
        />{" "}
        <br />
      </div>

      <div className="criteria">
        <p>CRITERIA:</p>
        <p>
          <span> Availability: </span>
          The Event provides closed-captioning.
        </p>
        <p>
          <span>Other Accommodations: </span>
          The Event provides other accommodations as requested.
        </p>
        <p>
          <span> Findability: </span>
          The information about the accessibility accommodations provided at the
          Event is easy to find on the website.
        </p>
      </div>
    </div>
  );
};

export default PageSeven;
