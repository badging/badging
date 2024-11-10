/* eslint-disable jsx-a11y/label-has-associated-control */

import "../applyform.scss";

import "../../../assets/styles/global.scss";
import { useFormContext } from "react-hook-form";
// import UseFormContext from '../../hooks/useFormContext';
// import { Button as MuiButton } from '@mui/material';
// import { styled } from '@mui/system';
// import { useDesktop } from '../../contexts/DesktopContext';

// import { Outlet } from 'react-router-dom';

const PageOne = () => {
  // const { isDesktop } = useDesktop();
  const {
    register,
    // formState: { errors },
  } = useFormContext();

  return (
    <div className="badge_form">
      <div>
        <div className="input-wrapper ">
          <label htmlFor="eventname">Event name</label>
          <br /> <br />
          <input
            type="text"
            placeholder="Enter event name"
            id="eventname"
            name="nameIP"
            aria-required
            required
            className="input_text"
            {...register("nameIP", {
              required: true,
              message: "Please enter valid website",
            })}
          />{" "}
          {/* <p className="error">{errors.eventname?.message}</p> */}
          <br />
        </div>
        <div className="input-wrapper ">
          <label htmlFor="eventWebsite">Link to the event website</label> <br />{" "}
          <br />
          <input
            type="text"
            placeholder="Enter link to event website"
            className="input_text"
            id="eventWebsite"
            name="linkwebIP"
            aria-required
            required
            {...register("linkwebIP", {
              required: true,
              // pattern: {
              //  value:
              //   /^(https?:\/\/)?(wwww{1}\.)?[\w\d]*\.([a-zA-Z]*\.)?([a-zA-Z]*)?$/i,
              //  message: 'Please enter valid website',
              // },
            })}
          />{" "}
          {/* <p className="error">{errors.eventWebsite?.message}</p> */}
          <br />
        </div>
        <div className="radio-input">
          <p>Are you an organizer of this event?</p>
          <label htmlFor="organizerYes">
            <input
              type="radio"
              value="Yes"
              id="organizerYes"
              name="organizerYes"
              className="radio-input"
              aria-checked
              {...register("organizerIP", { required: true || false })}
            />
            Yes
          </label>
          &nbsp;
          <label htmlFor="organizerNo">
            <input
              type="radio"
              value="No"
              id="organizerNo"
              name="organizerNo"
              className="radio-input"
              aria-checked
              {...register("organizerIP", { required: true || false })}
            />
            No
          </label>
        </div>

        {/* <button type="submit" className="submit-button">
            SUBMIT
          </button> */}

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
      </div>
    </div>
  );
};

export default PageOne;
