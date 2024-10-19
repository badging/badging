import '../applyform.scss';
// import { useNavigate } from 'react-router-dom';
import '../../../assets/styles/global.scss';
import { useFormContext } from 'react-hook-form';
import { carretDown, carretRight } from '../../../assets/images';

import { useState } from 'react';
const PageNine = () => {
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
    <h4>Public Health and Safety</h4>
    <label className='text-sm' htmlFor='publicHealthCheck'>
     <input
      type='checkbox'
      name='PHIP'
      id='publicHealthCheck'
      {...register('PHIP', { required: true })}
     />{' '}
     &nbsp; This event commits to Public Health and Safety.
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
      <a href='https://github.com/chaoss/wg-dei/blob/main/focus-areas/event-diversity/public-health-and-safety.md'>
       CHAOSS Metric Document
      </a>
      <a href='https://publichealthpledge.com/'>Public Health Pledge</a>
     </div>
    )}
   </div>

   <div className='radio-input'>
    <p>
     Have you read about the{' '}
     <a className='ev-link' href='https://publichealthpledge.com/' target="_blank" rel="noopener noreferrer">Public Health Badging Program</a>
     ?
    </p>
    <label htmlFor='participateYes'>
     <input
      type='radio'
      value='Yes'
      id='participateYes'
      name='participateYes'
      className='radio-input'
      aria-checked
      {...register('PHIP1', { required: true || false })}
     />
     Yes
    </label>
    &nbsp;
    <label htmlFor='participateNo'>
     <input
      type='radio'
      value='No'
      id='participateNo'
      name='participateNo'
      className='radio-input'
      aria-checked
      {...register('PHIP1', { required: true || false })}
     />
     No
    </label>
   </div>
   <div className='input-wrapper '>
    <label htmlFor='provideLinkPH'>
     Please provide a link to information about public health and safety on the
     event website.
    </label>{' '}
    <br /> <br />
    <input
     className='input_text'
     id='provideLinkPH'
     type='text'
     name='PHIP3'
     placeholder='Enter your answer here'
     {...register('PHIP3', { required: true })}
    />{' '}
    <br />
   </div>

   <div className='criteria'>
    <p>CRITERIA:</p>
    <p>
     <span> PHPledge Badging Check: </span>
     The Event organizers have participated in the{' '}
     <a href='https://publichealthpledge.com/'>Public Health Badging Program</a>
     .
    </p>
    <p>
     <span>Findability: </span>
     Information about public health and safety procedures and provisions is
     publicly available on the event website.
    </p>
   </div>
  </div>
 );
};

export default PageNine;
