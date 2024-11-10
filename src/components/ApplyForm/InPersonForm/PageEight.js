import "../applyform.scss";
// import { useNavigate } from 'react-router-dom';
import "../../../assets/styles/global.scss";
import { useFormContext } from "react-hook-form";

const PageEight = () => {
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
        <h4>Event Location Inclusivity</h4>
        <label className="text-sm" htmlFor="famCheck">
          <input
            type="checkbox"
            name="ELIIP"
            id="famCheck"
            {...register("ELIIP", { required: true })}
          />{" "}
          &nbsp; This event commits to Event Location Inclusivity.
        </label>{" "}
        <br />
        <br />
        <div>
          <a
            className="ev-link"
            href="https://chaoss.community/kb/metric-event-location-inclusivity/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Metric: Event Location Inclusivity
          </a>
        </div>
      </div>

      <div className="input-wrapper ">
        <label htmlFor="locationCheck">
          To the best of your ability, has the Event’s geographic location been
          checked against lists of places of concern for the following
          demographics: sexual and gender minorities, people with disabilities,
          racial and ethnic minorities, women, or religious minorities?
        </label>{" "}
        <br /> <br />
        <textarea
          className="input_text"
          id="locationCheck"
          type="text"
          name="ELIIP1"
          placeholder="Enter your answer here"
          {...register("ELIIP1", { required: true })}
          rows="6"
          cols="75"
        />{" "}
        <br />
      </div>
      <div className="input-wrapper ">
        <label htmlFor="dateCheck">
          To the best of your ability, have the Event’s dates been checked for
          other events happening in the same location at the same time that
          could potentially bring harm to a subset of any attendees?
        </label>{" "}
        <br /> <br />
        <textarea
          className="input_text"
          id="dateCheck"
          type="text"
          name="ELIIP2"
          placeholder="Enter your answer here"
          {...register("ELIIP2", { required: true })}
          rows="6"
          cols="75"
        />{" "}
        <br />
      </div>
      <div className="input-wrapper ">
        <label htmlFor="marginalized">
          In what ways does the event communications address or acknowledge any
          cause for concern for marginalized attendees?
        </label>{" "}
        <br /> <br />
        <textarea
          className="input_text"
          id="marginalized"
          type="text"
          name="ELIIP3"
          placeholder="Enter your answer here"
          {...register("ELIIP3", { required: true })}
          rows="6"
          cols="75"
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

export default PageEight;
