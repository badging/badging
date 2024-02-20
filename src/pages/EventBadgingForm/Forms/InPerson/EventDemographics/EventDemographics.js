/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import TextField from '../../../../../components/Forms/TextField';
import Button from '../../../../../components/Button/Button';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import './EventDemographics.scss';

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
            <Checkbox label="Ddd" value="dsjd" sx={{
              color: pink[800],
              '&.Mui-checked': {
                color: pink[600],
              },
            }} />
          </div>

          <div className='physical-input'>
            <label>
              Detail the process for measuring Event Demographics <span style={{ color: "#D61B5E" }}>*</span>
            </label>
            <textarea placeholder='Enter your answer here' rows={6} cols={6} style={{ width: "100%", color: "#BEBEBE" }}>
            </textarea>
            <p>For example, the option of "Prefer not to answer".</p>
          </div>

          <div className='physical-input'>
            <label>
              Provide an example of an opt-out option on the Event registration page if available.<span style={{ color: "#D61B5E" }}>*</span>
            </label>
            <textarea placeholder='Enter your answer here' rows={6} cols={6} style={{ width: "100%", color: "#BEBEBE" }}>
            </textarea>
            <p>For example, the option of "Prefer not to answer".</p>
          </div>

          <div className='physical-input'>
            <label>
              Provide an example of a demographics text input box on the Event registration page if available.<span style={{ color: "#D61B5E" }}>*</span>
            </label>
            <textarea placeholder='Enter your answer here' rows={6} cols={6} style={{ width: "100%", color: "#BEBEBE" }}>
            </textarea>
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