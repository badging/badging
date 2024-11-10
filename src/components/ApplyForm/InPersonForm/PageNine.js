import "../applyform.scss";
// import { useNavigate } from 'react-router-dom';
import "../../../assets/styles/global.scss";
import { useFormContext } from "react-hook-form";

const PageNine = () => {
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
        <h4>Public Health and Safety</h4>
        <label className="text-sm" htmlFor="publicHealthCheck">
          <input
            type="checkbox"
            name="PHIP"
            id="publicHealthCheck"
            {...register("PHIP")}
          />{" "}
          &nbsp; This event commits to Public Health and Safety.
        </label>{" "}
        <br />
        <br />
        <div>
          <a
            className="ev-link"
            href="https://chaoss.community/kb/metric-public-health-and-safety/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Metric: Public Health and Safety
          </a>
        </div>
      </div>

      <div className="radio-input">
        <p>
          Have you read about the{" "}
          <a
            className="ev-link"
            href="https://publichealthpledge.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Public Health Badging Program
          </a>
          ?
        </p>
        <label htmlFor="participateYes">
          <input
            type="radio"
            value="Yes"
            id="participateYes"
            name="participateYes"
            className="radio-input"
            aria-checked
            {...register("PHIP1")}
          />
          Yes
        </label>
        &nbsp;
        <label htmlFor="participateNo">
          <input
            type="radio"
            value="No"
            id="participateNo"
            name="participateNo"
            className="radio-input"
            aria-checked
            {...register("PHIP1")}
          />
          No
        </label>
      </div>
      <div className="input-wrapper ">
        <label htmlFor="provideLinkPH">
          Please provide a link to information about public health and safety on
          the event website.
        </label>{" "}
        <br /> <br />
        <input
          className="input_text"
          id="provideLinkPH"
          type="text"
          name="PHIP3"
          placeholder="Enter your answer here"
          {...register("PHIP3")}
        />{" "}
        <br />
      </div>

      <div className="criteria">
        <p>CRITERIA:</p>
        <p>
          <span> PHPledge Badging Check: </span>
          The Event organizers have participated in the{" "}
          <a href="https://publichealthpledge.com/">
            Public Health Badging Program
          </a>
          .
        </p>
        <p>
          <span>Findability: </span>
          Information about public health and safety procedures and provisions
          is publicly available on the event website.
        </p>
      </div>
    </div>
  );
};

export default PageNine;
