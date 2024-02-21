/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import TextField from '../../../../../components/Forms/TextField';
import Button from '../../../../../components/Button/Button';
import './BasicInfo.scss';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import BpCheckbox from '../../../../../components/Checkbox/BpCheckbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const index = () => {
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
                        <TextField placeholder="Enter event name" label="Enter name" message={"Please enter a value"} />
                    </div>

                    <div className='physical-input'>
                        <TextField placeholder="Enter link to event website" label="Link to the event website" message={"Please enter a value"} />
                    </div>

                    <div className='physical-input'>
                        <FormLabel style={{ color: "#000000" }} id="demo-controlled-radio-buttons-group">
                            Are you an organizer of this event? <span style={{ color: "#D61B5E" }}>*</span>
                        </FormLabel>

                        <div style={{display:"flex", alignItems:"center"}}>
                            <div>
                                <BpCheckbox label="Yes" />
                            </div>

                            <div>
                                <BpCheckbox label="No" />
                            </div>
                        </div>
                    </div>

                    <Button className="btn-primary btn-next" disabled>
                        Next (1/6)
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default index