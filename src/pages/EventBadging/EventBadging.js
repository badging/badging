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
          <button onClick={() =>swapHandler('about')} className={swap == 'about' ? 'buttonActive' : 'buttonInActive'}>About Event Badging</button>
          <a href="https://github.com/badging/event-diversity-and-inclusion#badges-granted-version-3" target='_blank'>Badged Events</a>
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
                       
                        <div className='about-parag'>
                          <p className='pTitle'> Self-Assessment and Documentation</p>
                           <p>
                             
                            Before applying for a project badge, 
                            maintainers or project admins are encouraged 
                            to conduct a self-assessment of their project's 
                            DEI efforts based on the following CHAOSS 
                            DEI metrics: Project Access, Inclusive Leadership, 
                            Communication Transparency, and Newcomer Experience. 
                            After the reflective process, maintainers can 
                            document how the project attends to and prioritizes
                            DEI around these areas in a markdown file called 
                            the <a href="https://github.com/AllInOpenSource/All-In/blob/main/DEI.md" target='_blank' className='a-line'>DEI.md file.</a>  This DEI.md file should exist within 
                            the project's repository for easy feedback from the community.
                        </p> 
                        
                        </div>
                        
                        <div className='about-parag'>
                          <p className='pTitle'> Badging Application</p>
                        <p>
                         Once the DEI.md file is published and publicly available, project maintainers can proceed to apply here. The applicant must be an admin or maintainer of the project, and the repository that holds the DEI.md file must be specified.
                        </p>
                        <p>
                            Badging Evaluation: The review follows an automated process in which a CHAOSS bot 
                            scans the project repository for the presence of a DEI.md file. The bot 
                            will review the DEI.md file for relevant information provided by the maintainer
                             and its alignment with the CHAOSS DEI metrics stated in the <a href="https://github.com/AllInOpenSource/ProjectBadging/blob/main/DEI.md" target='_blank' className='a-line'>DEI.md template</a> to 
                             determine eligibility for the badge.  Upon successful review of the DEI.md file, 
                             a project badge will be issued. The four CHAOSS metrics used in the DEI.md file include: 
                        </p>
                        <ul className='bullet-list'>
                                <li>Project Access</li>
                                <li>Inclusive Leadership </li>
                                <li>Communication Transparency</li>
                                <li>Newcomer Experience</li>
                            </ul>

                            
                            
                        </div>
                        <div className='about-parag'>
                        <p className='pTitle'> Recognition and Badging</p>
                            <p>
                            Projects that meet the established criteria will receive the CHAOSS project badge, which can be prominently displayed on the project's website, documentation, or other relevant platforms. The badge signifies the project's commitment to DEI and highlights its adherence to DEI best practices. 
                            </p>
                        </div>
                        <div className='about-parag'>
                        <p className='pTitle'> Continued Engagement</p>
                            <p>
                            Once the badging process is completed, we provide, as an additional service, a report for maintainers to enable them to further reflect on their DEI efforts. This supplemental report will enable maintainers to identify areas of improvement and opportunity. The report may prove helpful as the project badging program evolves to include support for subsequent badges. Maintainers who receive the DEI badge are encouraged to continue their DEI efforts, share experiences, and learn from others in the community.
                            </p>
                        </div>
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
                                <li>Navigate to the <a href="https://chaoss.community/diversity-and-inclusion-badging/" target='_blank' className='a-line'>CHAOSS Event Badging submission form</a> </li>
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