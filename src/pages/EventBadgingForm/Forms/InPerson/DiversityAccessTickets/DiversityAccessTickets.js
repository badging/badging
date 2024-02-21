import React from 'react'
import './DiversityAccessTickets.scss';
import Button from '../../../../../components/Button/Button';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import TextField from '../../../../../components/Forms/TextField';
import BpCheckbox from '../../../../../components/Checkbox/BpCheckbox';
import arrowRight from '../../../../../assets/images/others/arrow-right.svg';

const DiversityAccessTickets = () => {
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
                        <p style={{ fontWeight: "600", fontSize: "1.2rem" }}>Diversity Access Tickets</p>
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
                        <label style={{ fontWeight: "normal" }}>
                            How many different types of diversity access tickets are available for the event? <span style={{ color: "#D61B5E" }}>*</span>
                        </label>
                        <textarea placeholder='Enter your answer here' rows={6} cols={6} style={{ width: "100%", color: "#BEBEBE" }}>
                        </textarea>
                    </div>

                    <div className='physical-input'>
                        <label style={{ fontWeight: "normal" }}>
                            What are the criteria for qualifying for a diversity access ticket? <span style={{ color: "#D61B5E" }}>*</span>
                        </label>
                        <textarea placeholder='Enter your answer here' rows={6} cols={6} style={{ width: "100%", color: "#BEBEBE" }}>
                        </textarea>
                    </div>

                    <div style={{fontWeight: "normal"}} className='physical-input'>
                        <TextField style={{fontWeight: "normal"}}  placeholder="Enter your answer here" label="Provide a link to the page containing information about Diversity Access Tickets." message={"Please enter a value"} />
                    </div>

                    <div className='step-5-criteria'>
                        <p>
                            CRITERIA:<br />
                        </p>
                        <p>
                            <span style={{ color: "#000", fontWeight: "bold" }}>Availability - </span>
                            The event provides one or more Diversity Access Tickets.
                        </p>
                        <p>
                            <span style={{ color: "#000", fontWeight: "bold" }}>Ticket allocation - </span>
                            The Event has a process for allocating diversity access tickets.
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

                    <div className='btn-group'>
                        <Button className="btn-primary btn-next" >
                            Previous
                        </Button>

                        <Button className="btn-primary btn-next" disabled>
                            Next (5/6)
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default DiversityAccessTickets