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
import BpCheckbox from '../../../../../components/Checkbox/BpCheckbox';
import arrowRight from '../../../../../assets/images/others/arrow-right.svg';


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
                        <div>
                            <BpCheckbox style={{ fontSize: "12px" }} label="This event commits to the Code of Conduct at Event." />
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
                        <p>
                            Is the code of conduct posted at Event venue? *
                        </p>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <div>
                                <BpCheckbox label="Yes" />
                            </div>

                            <div>
                                <BpCheckbox label="No" />
                            </div>
                        </div>
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