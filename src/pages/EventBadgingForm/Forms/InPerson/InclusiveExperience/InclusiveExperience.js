import React from 'react';
import './InclusiveExperience.scss';
import Button from '../../../../../components/Button/Button';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import BpCheckbox from '../../../../../components/Checkbox/BpCheckbox';
import arrowRight from '../../../../../assets/images/others/arrow-right.svg';
import TextArea from '../../../../../components/TextArea/TextArea';

const InclusiveExperience = () => {
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
                        <p style={{ fontWeight: "600", fontSize: "1.2rem" }}>Inclusive Experience at Event</p>
                        <div>
                            <BpCheckbox style={{ fontSize: "12px" }} label="This event commits to Attendee Diversity & Inclusion." />
                        </div>
                    </div>

                    <div className='physical-input'>
                        <TextArea label="Provide an example of the Event Feedback page if available." rows={6} cols={6} placeholder="Enter your answer here" />
                    </div>

                    <div className='physical-input'>
                        <TextArea
                            label="Is the event team using feedback from previous event's attendees, speakers, and volunteers to improve DEI at this event?"
                            rows={6}
                            cols={6}
                            placeholder="Enter your answer here"
                        />
                        <p>If so, provide an example</p>
                    </div>

                    <div className='physical-input'>
                        <TextArea
                            label="Does the event team plan to use feedback from this event's attendees, speakers, and volunteers to improve DEI at future events?"
                            rows={6}
                            cols={6}
                            placeholder="Enter your answer here"
                        />
                        <p>If so, provide a summary of the strategy involved</p>
                    </div>

                    <div className='physical-input'>
                        <TextArea
                            label="How can attendees learn more about accessibility at the event?"
                            rows={6}
                            cols={6}
                            placeholder="Enter your answer here"
                        />
                    </div>

                    <div className='physical-input'>
                        <TextArea
                            label="Does the event platform allow attendees to suggest future accomodations for the event?"
                            rows={6}
                            cols={6}
                            placeholder="Enter your answer here"
                        />
                        <p>If yes, provide the process </p>
                    </div>

                    <div className='physical-input'>                       
                        <TextArea
                            label="Will the event platform be accessible to attendees and speakers after the event?" 
                            rows={6} 
                            cols={6} 
                            placeholder="Enter your answer here" 
                        />
                        <p>If yes, provide the name of the platform </p>
                    </div>

                    <div className='step-2-criteria'>
                        <p>
                            CRITERIA:<br />
                        </p>
                        <p>
                            <span style={{ color: "#000", fontWeight: "bold" }}>Speaker Inclusivity - </span>
                            The Event requests feedback from speakers regarding Diversity & Inclusion.
                        </p>
                        <p>
                            <span style={{ color: "#000", fontWeight: "bold" }}>Attendee Inclusivity - </span>
                            The Event requests feedback from attendees regarding Diversity & Inclusion.
                        </p>

                        <p>
                            <span style={{ color: "#000", fontWeight: "bold" }}>Retention - </span>
                            The Event incorporates feedback from past events, or has a strategy to incorporate feedback into future iterations of the event.
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

                    <div className='btn-group'>
                        <Button className="btn-primary btn-next" >
                            Previous
                        </Button>

                        <Button className="btn-primary btn-next" disabled>
                            Next (4/6)
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default InclusiveExperience