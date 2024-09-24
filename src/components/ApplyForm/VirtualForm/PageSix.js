import '../applyform.scss';
// import { useNavigate } from 'react-router-dom';
import '../../../assets/styles/global.scss';
import { useFormContext } from 'react-hook-form';
import { carretDown, carretRight } from '../../../assets/images';

import { useState } from 'react';
const PageSix = () => {
  const { register } = useFormContext();
  const [showLink, setShowLink] = useState(false);

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
      <div className="input-wrapper">
        {' '}
        <h4>Diversity Access Tickets</h4>
        <label htmlFor="accessTickets">
          <input
            type="checkbox"
            name="accessTickets"
            id="accessTickets"
            {...register('accessTickets', { required: true })}
            required
          />{' '}
          &nbsp;This event commits to the Diversity Access Tickets.
        </label>{' '}
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

      <div className="input-wrapper ">
        <label htmlFor="ticketType">
          How many different types of diversity access tickets are available for
          the event?<span>*</span>
        </label>{' '}
        <br /> <br />
        <textarea
          className="input_text"
          id="ticketType"
          type="text"
          name="ticketType"
          placeholder="Enter your answer here"
          {...register('ticketType', { required: true })}
          rows="6"
          cols="75"
          required
        />{' '}
        <br />
      </div>
      <div className="input-wrapper ">
        <label htmlFor="ticketCriteria">
          What are the criteria for qualifying for a diversity access ticket?
          <span>*</span>
        </label>{' '}
        <br /> <br />
        <textarea
          className="input_text"
          id="ticketCriteria"
          type="text"
          name="ticketCriteria"
          placeholder="Enter your answer here"
          {...register('ticketCriteria', { required: true })}
          rows="6"
          cols="75"
          required
        />{' '}
        <br />
      </div>
      <div className="input-wrapper ">
        <label htmlFor="ticketLink">
          Provide a link to the page containing information about Diversity
          Access Tickets<span>*</span>
        </label>{' '}
        <br /> <br />
        <input
          type="text"
          placeholder="Enter your answer here"
          className="input_text"
          id="ticketLink"
          name="ticketLink"
          {...register('ticketLink', { required: true })}
          required
        />{' '}
        <br />
      </div>

      <div className="criteria">
        <p>CRITERIA:</p>
        <p>
          <span> Availability: </span>
          The event provides one or more Diversity Access Tickets.
        </p>
        <p>
          <span>Ticket allocation: </span>
          The Event has a process for allocating diversity access tickets.
        </p>
        <p>
          <span> Findability: </span>
          The information about Diversity Access Tickets is public.
        </p>
      </div>
      <div className="submit-info">
        <p>
          {' '}
          Once you click `submit`, you must use your GitHub account to finalize
          the issue on their Website by clicking `Create New Issue`.
        </p>
      </div>
    </div>
  );
};

export default PageSix;
