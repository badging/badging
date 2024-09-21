/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
// import { useForm } from 'react-hook-form';
import '../applyform.scss';
// import { useNavigate } from 'react-router-dom';
import '../../../assets/styles/global.scss';
import { useFormContext } from 'react-hook-form';
import { carretDown, carretRight } from '../../../assets/images';

import { useState } from 'react';
const PageFour = () => {
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
    <h4>Code of Conduct at Event</h4>
    <label className='text-sm' htmlFor='eventCode'>
     <input
      type='checkbox'
      name='COCIP'
      id='eventCode'
      {...register('COCIP', { required: true })}
     />{' '}
     &nbsp; This event commits to the Code of Conduct at Event.
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
      <a href='https://github.com/chaoss/wg-diversity-inclusion/blob/master/focus-areas/events/event-code-of-conduct.md'>
       CHAOSS Metric Document
      </a>
      <br />
      <a href='https://www.asaecenter.org/resources/articles/an_plus/2019/october/why-and-how-to-develop-an-event-code-of-conduct'>
       Developing an Event Code of Conduct
      </a>
      <br />
      <a href='https://blog.tito.io/posts/code-of-conduct-for-virtual-events/'>
       Code of Conduct for Virtual Events
      </a>
     </div>
    )}
   </div>
   <div className='radio-input'>
    <p>
     Is the code of conduct posted at Event venue?<span>*</span>
    </p>
    <label htmlFor='codeposted'>
     <input
      type='radio'
      value='Yes'
      id='codeposted'
      name='codeposted'
      {...register('COCIP1', { required: true || false })}
      className='radio-input'
     />
     Yes
    </label>
    &nbsp;
    <label htmlFor='codenotposted'>
     <input
      type='radio'
      value='No'
      id='codenotposted'
      name='codenotposted'
      {...register('COCIP1', { required: true || false })}
      className='radio-input'
     />
     No
    </label>
   </div>
   <div className='input-wrapper '>
    <label htmlFor='conductlink'>
     Provide link for the Event Code of Conduct<span>*</span>
    </label>{' '}
    <br /> <br />
    <input
     type='text'
     placeholder='Enter your answer here'
     className='input_text'
     id='conductlink'
     name='COCIP2'
     {...register('COCIP2', { required: true })}
    />{' '}
    <br />
   </div>

   <div className='criteria'>
    <p>CRITERIA:</p>
    <p>
     <span>Findability: </span>
     It is possible to find the Code of Conduct on the Event website.
    </p>
    <p>
     <span>Clarity: </span>
     Event Code of Conduct provides a definition of expected behaviour.
    </p>
    <p>
     <span>Reporting venue: </span>
     The event has a venue for reporting violations of the CoC at the event
     website.
    </p>
    <p>
     <span>Support at Event: </span>
     The Event Code of Conduct provided information about possible methods to
     provide support to victims of inappropriate behavior.
    </p>
    <p>
     <span> Enforcement: </span>
     The participants in the Event are required to accept the Code of Conduct.
    </p>
   </div>
  </div>
 );
};

export default PageFour;
