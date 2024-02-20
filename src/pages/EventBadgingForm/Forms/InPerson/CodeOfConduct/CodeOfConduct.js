import React, { useState } from 'react'
import './CodeOfConduct.scss';
import Button from '../../../../../components/Button/Button';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import TextField from '../../../../../components/Forms/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const CodeOfConduct = () => {
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

                <form style={{ marginTop: "4rem" }} className='form-container'>
                    <div className='physical-input'>
                        <p style={{ fontWeight: "600", fontSize: "1.1rem" }}>Code of Conduct at Event</p>
                        <Checkbox label="Ddd" value="dsjd" sx={{
                            color: pink[800],
                            '&.Mui-checked': {
                                color: pink[600],
                            },
                        }} />
                        <span style={{ color: "#000" }}>
                            This event commits to the Code of Conduct at Event
                        </span>
                    </div>

                    <div>
                        <p>
                            References
                        </p>
                    </div>

                    <div className='physical-input'>
                        <FormLabel style={{ color: "#000000" }} id="demo-controlled-radio-buttons-group">
                            Is the code of conduct posted at Event venue? <span style={{ color: "#D61B5E" }}>*</span>
                        </FormLabel>

                        <RadioGroup
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={value}
                            onChange={handleRadioChange}

                            style={{ display: "flex" }}
                        >
                            <FormControlLabel value="yes" control={<Radio color="success" />} label="Yes" />
                            <FormControlLabel value="no" control={
                                <Radio
                                    sx={{
                                        color: pink[800], // Change color for 'Yes'
                                        '&.Mui-checked': {
                                            color: pink[600],
                                        },
                                    }}
                                />} label="No" />
                        </RadioGroup>
                    </div>

                    <div className='physical-input'>
                        <TextField placeholder="Enter your answer" label="Provide the link for the Event Code of Conduct" message={"Please enter a value"} />
                    </div>


                    <div className='step-3-criteria'>
                        <p>
                            CRITERIA<br />
                        </p>
                        <p>
                            <span style={{ color: "#000", fontWeight: "bold" }}>Findability - </span>
                            It is possible to find the Code of Conduct on the Event website.
                        </p>
                        <p>
                            <span style={{ color: "#000", fontWeight: "bold" }}>Clarity - </span>
                            Event Code of Conduct provides a definition of expected behaviour.
                        </p>

                        <p>
                            <span style={{ color: "#000", fontWeight: "bold" }}>Reporting venue - </span>
                            The event has a venue for reporting violations of the CoC at the event website.
                        </p>

                        <p>
                            <span style={{ color: "#000", fontWeight: "bold" }}>Support at Event - </span>
                            The Event Code of Conduct provided information about possible methods to provide support to victims of inappropriate behavior.
                        </p>

                        <p>
                            <span style={{ color: "#000", fontWeight: "bold" }}>Enforcement - </span>
                            The participants in the Event are required to accept the Code of Conduct.
                        </p>
                    </div>

                    <div className='btn-group'>
                        <Button className="btn-primary btn-next" >
                            Previous
                        </Button>

                        <Button className="btn-primary btn-next" disabled>
                            Next (3/6)
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CodeOfConduct