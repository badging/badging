import "../applyform.scss";
// import { useNavigate } from 'react-router-dom';
import "../../../assets/styles/global.scss";
import { useFormContext } from "react-hook-form";

const PageSix = () => {
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
        <h4>Family Friendliness</h4>
        <label className="text-sm" htmlFor="famCheck">
          <input
            type="checkbox"
            name="FFIP"
            id="famCheck"
            {...register("FFIP", { required: true })}
          />{" "}
          &nbsp; This event commits to Family Friendliness.
        </label>{" "}
        <br />
        <br />
        <div>
          <a
            className="ev-link"
            href="https://chaoss.community/kb/metric-family-friendliness/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Metric: Family Friendliness
          </a>
        </div>
      </div>

      <div className="input-wrapper ">
        <label htmlFor="childcare">
          Does the Event provide childcare facilities for its attendees and
          speakers?
        </label>{" "}
        <br /> <br />
        <textarea
          className="input_text"
          id="childcare"
          type="text"
          name="FFIP1"
          placeholder="Enter your answer here"
          {...register("FFIP1", { required: true })}
          rows="6"
          cols="75"
        />{" "}
        <br />
      </div>
      <div className="input-wrapper ">
        <label htmlFor="familyEnviron">
          What are the other ways that a family-friendly environment is being
          created in the Event?
        </label>{" "}
        <br /> <br />
        <textarea
          className="input_text"
          id="familyEnviron"
          type="text"
          name="FFIP2"
          placeholder="Enter your answer here"
          {...register("FFIP2", { required: true })}
          rows="6"
          cols="75"
        />{" "}
        <br />
      </div>
      <div className="input-wrapper ">
        <label htmlFor="famLink">
          Provide relevant links related to family friendliness at the Event.
        </label>{" "}
        <br /> <br />
        <input
          type="text"
          placeholder="Enter your answer here"
          className="input_text"
          id="famLink"
          name="FFIP3"
          {...register("FFIP3", { required: true })}
        />{" "}
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
    </div>
  );
};

export default PageSix;
