/* eslint-disable jsx-a11y/label-has-associated-control */

import '../applyform.scss';

import '../../../assets/styles/global.scss';
import { useFormContext } from 'react-hook-form';
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
          <label htmlFor="eventname">
            Event name<span>*</span>
          </label>
          <br /> <br />
          <input
            type="text"
            placeholder="Enter event name"
            id="eventname"
            name="eventname"
            aria-required
            required
            className="input_text"
            {...register('eventname', {
              required: true,
              message: 'Please enter valid website',
            })}
          />{' '}
          {/* <p className="error">{errors.eventname?.message}</p> */}
          <br />
        </div>
        <div className="input-wrapper ">
          <label htmlFor="eventWebsite">
            Link to the event website<span>*</span>
          </label>{' '}
          <br /> <br />
          <input
            type="text"
            placeholder="Enter link to event website"
            className="input_text"
            id="eventWebsite"
            name="eventWebsite"
            aria-required
            required
            {...register('evenWebsite', {
              required: true,
              pattern: {
                value:
                  /^(https?:\/\/)?(wwww{1}\.)?[\w\d]*\.([a-zA-Z]*\.)?([a-zA-Z]*)?$/i,
                message: 'Please enter valid website',
              },
            })}
          />{' '}
          {/* <p className="error">{errors.eventWebsite?.message}</p> */}
          <br />
        </div>
        <div className="radio-input">
          <p>
            Are you an organizer of this event?<span>*</span>
          </p>
          <label htmlFor="yes">
            <input
              type="radio"
              id="yes"
              name="yes_no"
              className="radio-input"
              aria-checked
              {...register('yes_no', { required: true || false })}
            />
            Yes
          </label>
          &nbsp;
          <label htmlFor="No">
            <input
              type="radio"
              id="no"
              name="yes_no"
              className="radio-input"
              aria-checked
              {...register('yes_no', { required: true || false })}
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
