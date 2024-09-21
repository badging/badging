import '../applyform.scss';
// import { useNavigate } from 'react-router-dom';
import '../../../assets/styles/global.scss';
import { useFormContext } from 'react-hook-form';
import { carretDown, carretRight } from '../../../assets/images';

import { useState } from 'react';
const PageEight = () => {
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
    <h4>Event Location Inclusivity</h4>
    <label className='text-sm' htmlFor='famCheck'>
     <input
      type='checkbox'
      name='ELIIP'
      id='famCheck'
      {...register('ELIIP', { required: true })}
     />{' '}
     &nbsp; This event commits to Event Location Inclusivity.
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
      <a href='https://github.com/chaoss/wg-dei/blob/main/focus-areas/event-diversity/event-location-inclusivity.md'>
       CHAOSS Metric Document
      </a>
      <a href='https://www.equaldex.com/'>
       Equality Index for LGTBQ+ Community by Location
      </a>
      <a href='https://www.un.org/development/desa/disabilities/disability-laws-and-acts-by-country-area.html'>
       Disability Laws and Acts by Country/Area
      </a>
     </div>
    )}
   </div>

   <div className='input-wrapper '>
    <label htmlFor='locationCheck'>
     To the best of your ability, has the Event’s geographic location been
     checked against lists of places of concern for the following demographics:
     sexual and gender minorities, people with disabilities, racial and ethnic
     minorities, women, or religious minorities?
     <span>*</span>
    </label>{' '}
    <br /> <br />
    <textarea
     className='input_text'
     id='locationCheck'
     type='text'
     name='ELIIP1'
     placeholder='Enter your answer here'
     {...register('ELIIP1', { required: true })}
     rows='6'
     cols='75'
    />{' '}
    <br />
   </div>
   <div className='input-wrapper '>
    <label htmlFor='dateCheck'>
     To the best of your ability, have the Event’s dates been checked for other
     events happening in the same location at the same time that could
     potentially bring harm to a subset of any attendees?
     <span>*</span>
    </label>{' '}
    <br /> <br />
    <textarea
     className='input_text'
     id='dateCheck'
     type='text'
     name='ELIIP2'
     placeholder='Enter your answer here'
     {...register('ELIIP2', { required: true })}
     rows='6'
     cols='75'
    />{' '}
    <br />
   </div>
   <div className='input-wrapper '>
    <label htmlFor='marginalized'>
     In what ways does the event communications address or acknowledge any cause
     for concern for marginalized attendees?
     <span>*</span>
    </label>{' '}
    <br /> <br />
    <textarea
     className='input_text'
     id='marginalized'
     type='text'
     name='ELIIP3'
     placeholder='Enter your answer here'
     {...register('ELIIP3', { required: true })}
     rows='6'
     cols='75'
    />{' '}
    <br />
   </div>

   <div className='criteria'>
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
