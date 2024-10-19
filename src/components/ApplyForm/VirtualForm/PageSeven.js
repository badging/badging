import '../applyform.scss';
// import { useNavigate } from 'react-router-dom';
import '../../../assets/styles/global.scss';
import { useFormContext } from 'react-hook-form';
import { carretDown, carretRight } from '../../../assets/images';

import { useState } from 'react';
const PageSeven = () => {
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
  <div className='badge_form'>
   <div className='input-wrapper mb-0'>
    {' '}
    <h4>Event Accessibility</h4>
    <label htmlFor='eventAccess'>
     <input
      type='checkbox'
      name='EAV'
      id='eventAccess'
      {...register('EAV', { required: true })}
      required
     />{' '}
     &nbsp;This event commits to Event Accessibility.
    </label>{' '}
    <br />
    <button
     type='button'
     className='reference'
     onClick={(e) => {
      e.preventDefault();
      setShowLink(!showLink);
     }}
    >
     References
     {showLink ? (
      <span id='reft'>
       <img
        src={carretDown}
        width={35}
        height={35}
        alt='carret-icon'
        className='carret'
       />
      </span>
     ) : (
      <span id='reft'>
       <img
        src={carretRight}
        width={35}
        height={35}
        alt='carret-icon'
        className='carret'
       />
      </span>
     )}
    </button>
    <br />
    {showLink && (
     <div>
      <a href='https://github.com/chaoss/wg-diversity-inclusion/blob/master/focus-areas/events/event-accessibility.md'>
       CHAOSS Metric Document
      </a>
     </div>
    )}
   </div>

   <div className='input-wrapper '>
    <label htmlFor='closeCaption'>
     Is a form of closed-captioning provided?
    </label>{' '}
    <br /> <br />
    <textarea
     className='input_text'
     id='closeCaption'
     type='text'
     name='EAV1'
     placeholder='Enter your answer here'
     {...register('EAV1', { required: true })}
     rows='6'
     cols='75'
     required
    />{' '}
    <br />
   </div>
   <div className='input-wrapper '>
    <label htmlFor='accomodations'>
     Does the Event provide other accessibility accommodations, or will upon
     request?
     
    </label>{' '}
    <br /> <br />
    <textarea
     className='input_text'
     id='accomodations'
     type='text'
     name='EAV2'
     placeholder='Enter your answer here'
     {...register('EAV2', { required: true })}
     rows='6'
     cols='75'
     required
    />{' '}
    <br />
   </div>
   <div className='input-wrapper '>
    <label htmlFor='eventLink'>
     Provide relevant links related to event accessibility at the Event
     
    </label>{' '}
    <br /> <br />
    <input
     type='text'
     placeholder='Enter your answer here'
     className='input_text'
     id='eventLink'
     name='EAV3'
     {...register('EAV3', { required: true })}
     required
    />{' '}
    <br />
   </div>

   <div className='criteria'>
    <p>CRITERIA:</p>
    <p>
     <span> Availability: </span>
     The Event provides closed-captioning.
    </p>
    <p>
     <span>Other Accomodations: </span>
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
