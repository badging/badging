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

    const faqs = [
        {
            "id": 1,
            "title" : "Event 1",
            "description" : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, excepturi?"
        },
        {
            "id":2,
            "title" : "Event 2",
            "description" : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, excepturi?"
        },
        {
            "id":3,
            "title" : "Event 3",
            "description" : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, excepturi?"
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
                        faqs && faqs.map((fac, key) => (
                        <div className='mainFaq' key={key} onClick={() =>faqHandler(fac.id)}>
                            <p className='faqTitle'>{fac.title}</p>
                           {
                            fac.id == faq && (
                            <div>
                                <h1>What is choos</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos alias doloribus animi harum eum itaque nisi et a eligendi accusamus.</p>
                            </div>
                            )
                           }
                        </div>
                        ))
                    }
                   
                </div>
                <div className={`${showAbout == 'project' ? 'showDesc' : 'hideDesc'}`}>
                    <p>Project</p>
                </div>
            </div>
        </section>
        <Footer />
    </main>
  )
}

export default Faq