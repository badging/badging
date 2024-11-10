/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
// import { useForm } from 'react-hook-form';
import "../applyform.scss";
// import { useNavigate } from 'react-router-dom';
import "../../../assets/styles/global.scss";
import { useFormContext } from "react-hook-form";

const PageFour = () => {
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
        <h4>Time Inclusion for Virtual Events</h4>
        <label htmlFor="timeInclusion">
          <input
            type="checkbox"
            name="TIVEV"
            id="timeInclusion"
            {...register("TIVEV", { required: true })}
          />{" "}
          &nbsp; This event commits to Time Inclusion for Virtual Events
        </label>{" "}
        <br />
        <br />
        <div>
          <a
            className="ev-link"
            href="https://chaoss.community/kb/metric-time-inclusion-for-virtual-events/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Metric: Time Inclusion for Virtual Events
          </a>
        </div>
      </div>
      <div className="radio-input">
        <p>
          Are speakers able to pre-record their presentations, as opposed to
          presenting them live?
        </p>
        <label htmlFor="preRecord">
          <input
            type="radio"
            value="No"
            id="preRecord"
            name="preRecord"
            {...register("TIVEV1", { required: true || false })}
            className="radio-input"
          />
          Yes
        </label>
        &nbsp;
        <label htmlFor="notpreRecord">
          <input
            type="radio"
            value="Yes"
            id="notpreRecord"
            name="notpreRecord"
            {...register("TIVEV1", { required: true || false })}
            className="radio-input"
          />
          No
        </label>
      </div>
      <div className="radio-input">
        <p>
          Can attendees change video quality on the Event platform while viewing
          a presentation?
        </p>
        <label htmlFor="vidQualityYes">
          <input
            type="radio"
            value="Yes"
            id="vidQualityYes"
            name="vidQualityYes"
            {...register("TIVEV2", { required: true || false })}
            className="radio-input"
          />
          Yes
        </label>
        &nbsp;
        <label htmlFor="vidQualityNo">
          <input
            type="radio"
            value="No"
            id="vidQualityNo"
            name="vidQualityNo"
            {...register("TIVEV2", { required: true || false })}
            className="radio-input"
          />
          No
        </label>
      </div>

      <div className="criteria mt-2">
        <p>CRITERIA:</p>

        <p>
          <span>Pre-Recording: </span>
          Speakers have the ability to pre-record presentations.
        </p>
        <p>
          <span>Network Bandwidth Options:</span>
          Attendees are provided with more than one option for video playback
          quality.
        </p>
      </div>
    </div>
  );
};

export default PageFour;
