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
        <label className="text-sm" htmlFor="famCheck">
          <input
            type="checkbox"
            name="EAIP"
            id="famCheck"
            {...register("EAIP", { required: true })}
          />{" "}
          &nbsp; This event commits to Event Accessibility.
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
        <label htmlFor="wheelchairAccess">
          Is the Event in a wheelchair-accessible venue?
        </label>{" "}
        <br /> <br />
        <textarea
          className="input_text"
          id="wheelchairAccess"
          type="text"
          name="EAIP1"
          placeholder="Enter your answer here"
          {...register("EAIP1", { required: true })}
          rows="6"
          cols="75"
        />{" "}
        <br />
      </div>
      <div className="input-wrapper ">
        <label htmlFor="slidesGuide">
          Are speakers given guidance about creating slides that are colorblind
          accessible?
        </label>{" "}
        <br /> <br />
        <textarea
          className="input_text"
          id="slidesGuide"
          type="text"
          name="EAIP2"
          placeholder="Enter your answer here"
          {...register("EAIP2", { required: true })}
          rows="6"
          cols="75"
        />{" "}
        <br />
      </div>
      <div className="input-wrapper ">
        <label htmlFor="signage">
          Is signage at the event and the event website colorblind accessible?
        </label>{" "}
        <br /> <br />
        <textarea
          className="input_text"
          id="signage"
          type="text"
          name="EAIP3"
          placeholder="Enter your answer here"
          {...register("EAIP3", { required: true })}
          rows="6"
          cols="75"
        />{" "}
        <br />
      </div>
      <div className="input-wrapper ">
        <label htmlFor="otherAccess">
          Does the Event provide other accessibility accommodations, or will
          upon request?
        </label>{" "}
        <br /> <br />
        <textarea
          className="input_text"
          id="otherAccess"
          type="text"
          name="EAIP4"
          placeholder="Enter your answer here"
          {...register("EAIP4", { required: true })}
          rows="6"
          cols="75"
        />{" "}
        <br />
      </div>
      <div className="input-wrapper ">
        <label htmlFor="eventAccessLink">
          Provide relevant links related to event accessibility at the Event.
        </label>{" "}
        <br /> <br />
        <input
          type="text"
          placeholder="Enter your answer here"
          className="input_text"
          id="eventAccessLink"
          name="EAIP5"
          {...register("EAIP5", { required: true })}
        />{" "}
        <br />
      </div>

      <div className="criteria">
        <p>CRITERIA:</p>
        <p>
          <span> Wheelchair Accessible: </span>
          The Event is in a wheelchair-accessible venue.
        </p>
        <p>
          <span>Colorblind Accessible: </span>
          The Event guides speakers and provides colorblind-friendly signage.
        </p>
        <p>
          <span>Other Accommodations: </span>
          The Event will provide other accommodations as requested.
        </p>
        <p>
          <span>Findability: </span>
          The information about the accessibility accommodations provided at the
          Event is easy to find on the website.
        </p>
      </div>
    </div>
  );
};

export default PageSeven;
