import React, { useState } from 'react'
import { Footer, Jumbotron } from '../../components'
import { arrowRight } from '../../assets/images'
import "./Faq.scss"

const Faq = () => {
    const [showAbout, setShowAbout] = useState("event");
    const [faq, setFaq] = useState("");
   
      const eventHandler = (about) => {
        setShowAbout(about)
      }

      const faqHandler = (getFaq) => {
        setFaq(getFaq);
       
      }
    const title = "Frequently Asked Questions";

    const eventFaqs = [
        {
            "id": 1,
            "title" : "What requirements are needed before I apply for a badge?",
            "description" : "To submit an application for your event/conference, you will need to have a GitHub account, as well as the information in the following documents:"
        },
        {
            "id":2,
            "title" : "Why do I need a DEI badge?",
            "description" : "Events, projects, and organizations can apply for the DEI badge to help measure and demonstrate their commitment to DEI values and practices and inspire others to follow in their footsteps."
        },
        {
            "id":3,
            "title" : "What happens if my event is awarded 'Pending'?",
            "description" : "Pending events have an opportunity to improve their badge level by altering their processes and procedures and improving the information that is available on the event website. This is a partnership with CHAOSS and event organizers can work with the badge reviewers on ideas for improvement."
        },
        {
            "id": 4,
            "title": "If my event happens every year, can I use the badge from past events?",
            "description": "No. We ask that you submit a new application for every separate event. We will occasionally be changing the metrics used in the application, and in some cases, there will be different questions on the application from year to year."
        }
    ]

    const projectFaqs = [
        {
            "id": 1,
            "title" : "What are the requirements needed to apply for a badge?",
            "description" : "To apply for a badge, you need to meet the following requirements:"
        },
        {
            "id":2,
            "title" : "How do I get a badge?",
            "description" : "To obtain a badge, simply follow the detailed instructions provided. You can submit your application here."
        },
        {
            "id":3,
            "title" : "How frequently can I apply for a badge?",
            "description" : "You can apply for the project badge for any open-source project or organization annually."
        }
    ]

  return (
    <main>
        <Jumbotron  title={title}/>
        <section className='faq container'>
         <ul className='main-list'>
                <li onClick={() =>eventHandler('event')} className={showAbout == 'event' ? 'aboutEventHeader': ''} >What is Event Badging {showAbout == 'event' && (<img src={arrowRight} alt="arrow" />)} </li>
                <li onClick={() =>eventHandler('project')} className={showAbout == 'project' ? 'aboutEventHeader': ''}>How It Works {showAbout == 'project' && (<img src={arrowRight} alt="arrow" />)}</li>
            </ul>
            

            <div className="desc-group">
                <div className={`desc-child ${showAbout == 'event' ? 'showDesc' : 'hideDesc'}`}>
                    {
                        eventFaqs && eventFaqs.map((fac, key) => (
                        <div className='mainFaq' key={key} onClick={() =>faqHandler(fac.id)} >
                            <p className={`faqTitle ${fac.id == faq ? 'hideHeader' : ''}`} >{fac.title} </p>
                           {
                            fac.id == faq && (
                            <div className='faq-info' style={{backgroundColor: fac.id == faq ? '#fff' : ''}}>
                                <p className='faq-info-title'>{fac.title}</p>
                                <p>{fac.description}</p>
                                { faq == 2 && (
                                    <ul className='fac-li'>
                                    <li >
                                    <a href="#">Event Submission Requirements:</a> This document describes the minimum requirements for an event/conference to be eligible for a CHAOSS badging process.
                                    </li>
                                    <li>
                                    <a href="#">Event Submission Guidelines:</a> This document describes guidelines and steps on how an event can gain a badge under the CHAOSS Badging program.
                                    </li>
                                </ul>
                                )}
                            </div>
                            )
                           }
                        </div>
                        ))
                    }
                   
                </div>
                <div className={`desc-child ${showAbout == 'project' ? 'showDesc' : 'hideDesc'}`}>
                {
                        projectFaqs && projectFaqs.map((fac, key) => (
                        <div className='mainFaq' key={key} onClick={() =>faqHandler(fac.id)} >
                            <p className={`faqTitle ${fac.id == faq ? 'hideHeader' : ''}`} >{fac.title} </p>
                           {
                            fac.id == faq && (
                            <div className='faq-info' style={{backgroundColor: fac.id == faq ? '#fff' : ''}}>
                                <p className='faq-info-title'>{fac.title}</p>
                                <p>{fac.description}</p>
                                { faq == 1 && (
                                    <ul className='fac-li'>
                                    <li >
                                    Ensure your project or organization has a GitHub, GitLab, or any private web-based repository that can be accessed
                                    </li>
                                    <li>
                                    Ensure the repository provided has a DEI.md file that follows this format.
                                    </li>
                                </ul>
                                )}
                            </div>
                            )
                           }
                        </div>
                        ))
                    }
                </div>
            </div>
        </section>
        <Footer />
    </main>
  )
}

export default Faq