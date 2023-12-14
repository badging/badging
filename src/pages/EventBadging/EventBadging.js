import React, { useState } from 'react'
import { Footer, Header } from '../../components'
import AboutNew from '../../components/AboutDeiBadgingCom/About'
import "./eventBadging.scss";
import "../../assets/styles/global.scss";
import { arrowRight } from '../../assets/images';
const EventBadging = () => {
    const [swap, setSwap] = useState("about");
    const [showAbout, setShowAbout] = useState("what");
    const swapHandler = (toggle) => {
        setSwap(toggle)
      }
      const eventHandler = (about) => {
        setShowAbout(about)
      }
  return (
    <>
        <main>
        <div className='overlay'>
            <div className='bgRight'></div>
            <div className='bgCenter'></div>
            <div className='bgLeft'></div>
        </div>
      <Header />
      <div className="container jumbotron__container">
      
        {/* <img src={curlyBraces} alt="badging-logo" /> */}
        <h1>Event Badging</h1>
        <div className="about-project">
          <button onClick={() =>swapHandler('about')} className={swap == 'about' ? 'buttonActive' : 'buttonInActive'}>About Project Badging</button>
          <a href="/about-project-badging">Badged Projects</a>
          {/* <button onClick={() => swapHandler('project')} className={swap == 'project' ? 'buttonActive' : 'buttonInActive'}>Badged Projects</button> */}
        </div>
      </div>
      <section className='container'>
        <div className="main-event">
            <ul className='main-list'>
                <li onClick={() =>eventHandler('what')} className={showAbout == 'what' ? 'aboutEventHeader': ''} >What is Event Badging {showAbout == 'what' && (<img src={arrowRight} alt="arrow" />)} </li>
                <li onClick={() =>eventHandler('works')} className={showAbout == 'works' ? 'aboutEventHeader': ''}>How It Works {showAbout == 'works' && (<img src={arrowRight} alt="arrow" />)}</li>
                <li onClick={() =>eventHandler('apply')} className={showAbout == 'apply' ? 'aboutEventHeader': ''}>How to Apply {showAbout == 'apply' && (<img src={arrowRight} alt="arrow" />)}</li>
            </ul>

            <div className="desc-group">
                <div className={`${showAbout == 'what' ? 'showDesc' : 'hideDesc'}`}>
                    <div className='info'>
                        <h1>What is Event badging</h1>
                        <p>
                            The CHAOSS Event badging initiative is an award
                             system through which open source events earn
                              badges that acknowledge their ongoing commitment
                               to improving and supporting diversity, equity,
                                and inclusion in open source events
                        </p>
                        <p>
                            The primary aim of this initiative is to help 
                            open source events enhance their inclusivity 
                            and nurture a system that promotes leadership,
                             self-reflection, and self-improvement on critical
                              issues related to diversity, equity, 
                              and inclusion in open source.
                        </p>
                    </div>
                </div>
                <div className={`${showAbout == 'works' ? 'showDesc' : 'hideDesc'}`}>
                    <div className='info'>
                        <h1>How it Works</h1>
                        <p>
                        CHAOSS Event Badging measures the inclusivity of 
                        open source events through human reviews. 
                        Event organizers applying for a CHAOSS event 
                        badge should complete the submission form, which 
                        will open an issue under the corresponding GitHub 
                        repository. 
                        </p>
                        <p>
                        Reviewers will be randomly assigned to the application based 
                        on the reviewer list. All assigned reviewers will utilize 
                        the review checklist, which is based on metrics defined by CHAOSS, 
                        to provide feedback to the applicant on their event's DEI efforts. <br /><br /> 
                        Following this feedback, a CHAOSS Event badge will be generated based on the event's performance in the review. 
                        </p>
                    </div>
                </div>
                <div className={`${showAbout == 'apply' ? 'showDesc' : 'hideDesc'}`}>
                    <div className='info'>
                        <h1>How to apply</h1>
                        <p>
                            To submit an application for your event/conference, 
                            you will need to have a GitHub account, as well as 
                            meet the following requirements:
                        </p>
                        <div className='des-bullets'>
                            <p className='Dtitle'>Event status-related requirements</p>
                            <ul className='bullet-list'>
                                <li>
                                The event must be about open-source technologies and practices.
                                </li>
                                <li>
                                You should be an organizer of the event you are applying for.
                                </li>
                            </ul>
                        </div>

                        <div className='des-bullets'>
                            <p className='Dtitle'>Metric related requirements</p>
                            <ul className='bullet-list'>
                                <li>
                                The information about the event must be publicly available, for example, on a website.
                                </li>
                                <li>
                                Important contact information must be available for potential attendees and speakers.
                                </li>
                                <li>
                                The event must have a Code of Conduct hosted on the website.
                                </li>
                            </ul>
                        </div>
                        <div className='des-bullets'>
                            <p className='Smalltitle'>CHAOSS Badging Event submission guidelines</p>
                            <p className='Dtitle'>General guidelines</p>
                            <ul className='bullet-list'>
                                <li>
                                Make sure all the <a href="https://github.com/badging/event-diversity-and-inclusion/blob/main/info-for-applicants/requirements.md" className='a-line'>requirements</a> are fulfilled before initiating a CHAOSS Badging application.
                                </li>
                                <li>
                                Timely integrate reviewers' feedback while the CHAOSS Badging application is being evaluated.
                                </li>
                            </ul>
                        </div>

                        <div className='des-bullets'>
                            <p className='Dtitle'>Application guide</p>
                            <ul className='bullet-list num'>
                                <li>Navigate to the <a href="https://chaoss.community/diversity-and-inclusion-badging/" className='a-line'>CHAOSS Event Badging submission form</a> </li>
                                <li>Fill out the web form to the best of your ability and click "Submit" on the web form.</li>
                                <li>An issue template will be created for you with the information you provided. Click "Create New Issue" to begin the application.</li>
                                <li>Communicate with the reviewers during the process and provide event information according to the metrics your event is committed to.</li>
                                <li>At least two reviewers will be assigned to assess your event, and they will provide feedback where necessary.</li>
                                <li>The review ends when a maintainer confirms that the initial checks are met, and everything is in order. </li>
                                <li>Then, a badge is generated for you according to the information provided, and the checklist is completed. </li>
                                <li>The issue will be closed by a maintainer using the /end command in a comment.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      
      </main>
      <Footer />
    </>
    

  )
}

export default EventBadging