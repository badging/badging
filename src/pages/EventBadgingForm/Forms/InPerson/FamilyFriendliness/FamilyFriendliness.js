import React from 'react';
import './FamilyFriendliness.scss';
import Button from '../../../../../components/Button/Button';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import TextField from '../../../../../components/Forms/TextField';
import BpCheckbox from '../../../../../components/Checkbox/BpCheckbox';
import arrowRight from '../../../../../assets/images/others/arrow-right.svg';
import TextArea from '../../../../../components/TextArea/TextArea';

const FamilyFriendliness = () => {
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
                        <p style={{ fontWeight: "600", fontSize: "1.2rem" }}>Family Friendliness</p>
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
                            label="Does the Event provide childcare facilities for its attendees and speakers?" 
                            rows={6} 
                            cols={6} 
                            placeholder="Enter your answer here" 
                        />
                    </div>

                    <div style={{ fontWeight: "normal" }} className='physical-input'>
                        <TextField style={{ fontWeight: "normal" }} placeholder="Enter your answer here" label="Provide relevant links related to family friendliness at the Event. " message={"Please enter a value"} />
                    </div>

                    <div className='step-6-criteria'>
                        <p>
                            CRITERIA:<br />
                        </p>
                        <p>
                            <span style={{ color: "#000", fontWeight: "bold" }}> Availability - </span>
                            The Event provides one or more services/facilities for families.
                        </p>
                        <p>
                            <span style={{ color: "#000", fontWeight: "bold" }}>Ticket allocation - </span>
                            The information about the family friendly services provided at the Event is easy to find on the website.
                        </p>

                        <p>
                            <span style={{ color: "#000", fontWeight: "bold" }}>Findability - </span>
                            The information about Diversity Access Tickets is public.
                        </p>

                        <p>
                            <span style={{ color: "#000", fontWeight: "bold" }}>Accessibility Requests - </span>
                            Attendees are able to inquire if accomodations are available and make suggestions for future accomodations at events.
                        </p>

                        <p>
                            <span style={{ color: "#000", fontWeight: "bold" }}>Session Accessibility - </span>
                            Event attendees are able to access the event platform after the event.
                        </p>
                    </div>

                    <div className='callout-note-on-sibmit'>
                        Once you click "submit", you must use your GitHub
                        account to finalize the issue on their Website by
                        clicking "Create New Issue".
                    </div>

                    <div className='btn-group'>
                        <Button className="btn-primary btn-next" >
                            Previous
                        </Button>

                        <Button className="btn-primary btn-next" disabled>
                            Submit (6/6)
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FamilyFriendliness