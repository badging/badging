/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import TextField from '../../../../../components/Forms/TextField';
import Button from '../../../../../components/Button/Button';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import './EventDemographics.scss';
import arrowRight from '../../../../../assets/images/others/arrow-right.svg';
import BpCheckbox from '../../../../../components/Checkbox/BpCheckbox';
import TextArea from '../../../../../components/TextArea/TextArea';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const EventDemographics = () => {

  const [value, setValue] = useState("");


  const handleRadioChange = (value) => {
    setValue(value)
  }

  return (
    <div className='container'>
      <div className='in-person-form'>
        <h4 style={{ color: "#000000" }}>In-Person Event</h4>
        <p>
          Please only use this form if you are applying for
          a CHAOSS DEI Event Badge for physical events. You
          can apply for virtual events <a href="#" style={{ color: "#D61B5E" }}> here </a>
        </p>

        <form className='form-container'>
          <div className='physical-input'>
            <p style={{ fontWeight: "600", fontSize: "1.2rem" }}>Diversity Access Tickets</p>
            <div>
              <BpCheckbox style={{ fontSize: "12px" }} label="This event commits to Speaker Diversity & Inclusion." />
            </div>
          </div>

          <div style={{ marginTop: "1rem" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <p style={{ color: "#000000" }}>
                References
              </p>
              {" "}
              <img src={arrowRight} alt="right arrow" />
            </div>
          </div>

          <div className='physical-input'>
            <TextArea
              label="Detail the process for measuring Event Demographics"
              rows={6}
              cols={6}
              placeholder="Enter your answer here"
            />
            <p>For example, the option of "Prefer not to answer".</p>
          </div>

          <div className='physical-input'>            
            <TextArea
              label="Provide an example of an opt-out option on the Event registration page if available."
              rows={6}
              cols={6}
              placeholder="Enter your answer here"
            />
            <p>For example, the option of "Prefer not to answer".</p>
          </div>

          <div className='physical-input'>           
            <TextArea
              label="Provide an example of a demographics text input box on the Event registration page if available."
              rows={6}
              cols={6}
              placeholder="Enter your answer here"
            />
            <p>For example, an alternative identity input for gender.</p>
          </div>

          <div className='step-2-criteria'>
            <p>
              Criteria:<br />
            </p>
            <p>
              <span style={{ color: "#000", fontWeight: "bold" }}>Measuring Demographics: </span>
              This event commits to Speaker Diversity & Inclusion.
            </p>
            <p>
              <span style={{ color: "#000", fontWeight: "bold" }}>Opt-Out: </span>
              The Event provides an opportunity to opt-out of providing demographic data.
            </p>

            <p>
              <span style={{ color: "#000", fontWeight: "bold" }}>Text Input: </span>
              The Event provides a text box to input certain data such as Gender, Race, or Ethnicity.
            </p>
          </div>

          <div className='btn-group'>
            <Button className="btn-primary btn-next" >
              Previous
            </Button>

            <Button className="btn-primary btn-next" disabled>
              Next (2/6)
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EventDemographics