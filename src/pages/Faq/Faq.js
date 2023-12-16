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
            "title" : "What requirements are needed before I apply for a CHAOSS DEI Event Badge?",
            "description" : "To submit an application for your event/conference, you will need to have a GitHub account, as well as information about how your event/conference attends to particular DEI criteria"
        },
        {
            "id":2,
            "title" : "Why do I need a CHAOSS DEI Event Badge?",
            "description" : "Events organizers can apply for the DEI badge to help measure and demonstrate their commitment to DEI values and practices and inspire others to follow in their footsteps."
        },
        {
            "id":3,
            "title" : "What happens when my event receives a CHAOSS DEI Event Badge?",
            "description" : "You have an opportunity to display your badge prominently on your event website. We will also list your badged event in our CHAOSS Badged Events table."
        },
        {
            "id": 4,
            "title": "If my event happens every year, can I use the CHAOSS DEI Event Badge from past events?",
            "description": "No. We ask that you submit a new application for every separate event. We will occasionally be changing the metrics used in the application, and in some cases, there will be different questions on the application from year to year."
        }
    ]

    const projectFaqs = [
        {
            "id": 1,
            "title" : "What are the requirements needed to apply for a CHAOSS DEI Project Badge?",
            "description" : "To apply for a badge, you need to address the requirements as specified in the DEI.md template"
        },
        {
            "id":2,
            "title" : "How do I get a CHAOSS DEI Project Badge?",
            "description" : "To obtain a badge, simply follow the detailed instructions provided. You can submit your application here."
        },
        {
            "id":3,
            "title" : "How frequently should I apply for a CHAOSS DEI Project Badge?",
            "description" : "We ask that you apply for the project badge for any open source project annually."
        }
    ]

  return (
    <main>
        <Jumbotron  title={title}/>
        <section className='faq container'>
         <ul className='main-list'>
                <li onClick={() =>eventHandler('event')} className={showAbout == 'event' ? 'aboutEventHeader': ''} >Event Badging {showAbout == 'event' && (<img src={arrowRight} alt="arrow" />)} </li>
                <li onClick={() =>eventHandler('project')} className={showAbout == 'project' ? 'aboutEventHeader': ''}>Poject Badging {showAbout == 'project' && (<img src={arrowRight} alt="arrow" />)}</li>
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
                                    <a href="#">CHAOSS DEI Event Submission Requirements:</a> The application process will disply the minimum requirements for an event/conference to be able to receive a CHAOSS DEI Event badge.
                                    </li>
                                    <li>
                                    <a href="#">Event Submission Guidelines:</a> The application process describes guidelines and steps on how your event can gain a CHAOSS DEI Event Badge.
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
                                    Ensure your project has a public GitHub or GitLab repository where your DEI.md file is located or
                                    </li>
                                    <li>
                                    If you have a priviate GitHub or GitLab repository, enusre that your DEI.md file is available on a website or other public location.
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
