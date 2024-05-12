import React, { useState } from 'react';
import { Footer, Header } from '../../components';
import BadgedEvents from './BadgedEvents';
import './event-badging.scss';
import '../../assets/styles/global.scss';
import { arrowRight } from '../../assets/images';
const EventBadging = () => {
  const [swap, setSwap] = useState('about');
  const [showAbout, setShowAbout] = useState('what');
  const swapHandler = (toggle) => {
    setSwap(toggle);
  };
  const eventHandler = (about) => {
    setShowAbout(about);
  };
  return (
    <>
      <main>
        <div className='overlay'>
          <div className='bgRight'></div>
          <div className='bgCenter'></div>
          <div className='bgLeft'></div>
        </div>
        <Header />
        <div className='container jumbotron__container'>
          <h1>Event Badging</h1>
          <div className='about-project'>
            <button
              onClick={() => swapHandler('about')}
              className={swap == 'about' ? 'buttonActive' : 'buttonInActive'}
            >
              About Event Badging
            </button>
            <button
              onClick={() => swapHandler('events')}
              className={swap == 'events' ? 'buttonActive' : 'buttonInActive'}
            >
              Badged Events
            </button>
            {/* <a
              href="https://github.com/badging/event-diversity-and-inclusion#badges-granted-version-3"
              target="_blank"
            >
              Badged Events
            </a> */}
          </div>
        </div>
        <section className='container'>
          {swap && swap == 'about' ? (
            <div className='main-event'>
              <ul className='main-list'>
                <li
                  onClick={() => eventHandler('what')}
                  className={showAbout == 'what' ? 'aboutEventHeader' : ''}
                >
                  What is Event Badging{' '}
                  {showAbout == 'what' && <img src={arrowRight} alt='arrow' />}{' '}
                </li>
                <li
                  onClick={() => eventHandler('works')}
                  className={showAbout == 'works' ? 'aboutEventHeader' : ''}
                >
                  How It Works{' '}
                  {showAbout == 'works' && <img src={arrowRight} alt='arrow' />}
                </li>
                <li
                  onClick={() => eventHandler('apply')}
                  className={showAbout == 'apply' ? 'aboutEventHeader' : ''}
                >
                  How to Apply{' '}
                  {showAbout == 'apply' && <img src={arrowRight} alt='arrow' />}
                </li>
                <li
                  onClick={() => eventHandler('badger')}
                  className={showAbout == 'badger' ? 'aboutEventHeader' : ''}
                >
                  Become a Badger{' '}
                  {showAbout == 'badger' && (
                    <img src={arrowRight} alt='arrow' />
                  )}
                </li>
              </ul>

              <div className='desc-group'>
                <div
                  className={`${showAbout == 'what' ? 'showDesc' : 'hideDesc'}`}
                >
                  <div className='info'>
                    <h1>What is CHAOSS DEI Event badging</h1>
                    <p>
                      The CHAOSS DEI Event Badging Initiative is an award system
                      through which open source event organizers earn badges
                      that acknowledge their ongoing commitment to improving and
                      supporting diversity, equity, and inclusion in open source
                      events.
                    </p>
                    <p>
                      The primary aim of this initiative is to help open source
                      events enhance their inclusivity and nurture a system that
                      promotes leadership, self-reflection, and self-improvement
                      on critical issues related to diversity, equity, and
                      inclusion in open source.
                    </p>
                  </div>
                </div>
                <div
                  className={`${
                    showAbout == 'works' ? 'showDesc' : 'hideDesc'
                  }`}
                >
                  <div className='info'>
                    <h1>How it Works</h1>

                    <div className='about-parag'>
                      <p className='pTitle'>How it Works</p>
                      <p>
                        First, an event organizer will submit a badge
                        application and answer questions that are based on
                        CHAOSS DEI Metrics. Once an event organizer applies for
                        the CHAOSS DEI Event badge, the application goes through
                        a human review, where two reviewers examine the event’s
                        application, making sure it is in line with either our
                        in-person or virtual event review checklist. This is a
                        transparent and open process, as all reviews and
                        feedback are done publicly through a repository on
                        GitHub. Once the review is concluded, we award badges
                        according to the performance of the review. These badges
                        come in four different levels. When an event is awarded
                        the DEI Badge, it tells potential speakers, sponsors,
                        and attendees how much the event organizers are
                        concerned about making their events diverse and
                        inclusive to everyone.
                      </p>
                    </div>

                    <div className='about-parag'>
                      <p className='pTitle'> Before You Start</p>
                      <p>
                        For additional information, please visit the official
                        CHAOSS DEI Event Badging Repository. In order to submit
                        an application for your event/conference, review the
                        following documents:
                        <a href='https://github.com/badging/event-diversity-and-inclusion/blob/master/info-for-applicants/requirements.md'>
                          Event Submission Requirements
                        </a>
                        : This document describes the minimum requirements for
                        an event/conference to be eligible for a CHAOSS badging
                        process
                        <a href='https://github.com/badging/event-diversity-and-inclusion/blob/master/info-for-applicants/guidelines.md'>
                          Event Submission Guidelines
                        </a>
                        : This document describes guidelines and steps on how an
                        event can gain a badge under the CHAOSS Badging program.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className={`${
                    showAbout == 'apply' ? 'showDesc' : 'hideDesc'
                  }`}
                >
                  <div className='info'>
                    <h1>How to apply</h1>
                    <p>
                      To submit an application for your event/conference, you
                      will need to have a GitHub account, as well as meet the
                      following requirements:
                    </p>
                    <div className='des-bullets'>
                      <p className='Dtitle'>
                        Event status-related requirements
                      </p>
                      <ul className='bullet-list'>
                        <li>
                          The event must be about open-source technologies and
                          practices.
                        </li>
                        <li>
                          You should be an organizer of the event you are
                          applying for.
                        </li>
                      </ul>
                    </div>

                    <div className='des-bullets'>
                      <p className='Dtitle'>Metric related requirements</p>
                      <ul className='bullet-list'>
                        <li>
                          The information about the event must be publicly
                          available, for example, on a website.
                        </li>
                        <li>
                          Important contact information must be available for
                          potential attendees and speakers.
                        </li>
                        <li>
                          The event must have a Code of Conduct hosted on the
                          website.
                        </li>
                      </ul>
                    </div>
                    <div className='des-bullets'>
                      <p className='Smalltitle'>
                        CHAOSS DEI Event Badging submission guidelines
                      </p>
                      <p className='Dtitle'>General guidelines</p>
                      <ul className='bullet-list'>
                        <li>
                          Make sure all the{' '}
                          <a
                            href='https://github.com/badging/event-diversity-and-inclusion/blob/main/info-for-applicants/requirements.md'
                            className='a-line'
                          >
                            requirements
                          </a>{' '}
                          are fulfilled before initiating a CHAOSS DEI Event
                          Badging application.
                        </li>
                        <li>
                          Timely integrate reviewers' feedback while the CHAOSS
                          Badging application is being evaluated.
                        </li>
                      </ul>
                    </div>

                    <div className='des-bullets'>
                      <p className='Dtitle'>Application guide</p>
                      <ul className='bullet-list num'>
                        <li>
                          Navigate to the{' '}
                          <a
                            href='https://chaoss.community/diversity-and-inclusion-badging/'
                            target='_blank'
                            className='a-line'
                          >
                            CHAOSS DEI Event Badging submission form
                          </a>{' '}
                        </li>
                        <li>
                          Fill out the web form to the best of your ability and
                          click "Submit" on the web form.
                        </li>
                        <li>
                          An issue template will be created for you with the
                          information you provided. Click "Create New Issue" to
                          begin the application.
                        </li>
                        <li>
                          Communicate with the reviewers during the process and
                          provide event information according to the metrics
                          your event is committed to.
                        </li>
                        <li>
                          At least two reviewers will be assigned to assess your
                          event, and they will provide feedback where necessary.
                        </li>
                        <li>
                          The review ends when a maintainer confirms that the
                          initial checks are met, and everything is in order.{' '}
                        </li>
                        <li>
                          Then, a badge is generated for you according to the
                          information provided, and the checklist is completed.{' '}
                        </li>
                        <li>
                          The issue will be closed by a maintainer using the
                          /end command in a comment.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className={showAbout == 'badger' ? 'showDesc' : 'hideDesc'}
                >
                  <div className='info'>
                    <h1>Become a Badger</h1>
                    <p>
                      If you would like to help make open source events more
                      inclusive and welcoming, becoming a Badger is a great way
                      to do that! Badgers review incoming event badge
                      applications and interact with the event organizers
                      through GitHub. You do not need to have a deep knowledge
                      of CHAOSS or the DEI metrics used in the application, so
                      this is a perfect opportunity for those new to the
                      community to begin contributing to CHAOSS right away.
                    </p>
                    <div className='about-parag'>
                      <p>
                        To learn more about becoming a Badger, join the{' '}
                        <a
                          href='https://join.slack.com/t/chaoss-workspace/shared_invite/zt-28p56bayt-67TRjdA4yJWQmUd4hCzULg'
                          target='_blank'
                          className='a-line'
                        >
                          CHAOSS slack
                        </a>{' '}
                        and then join the #badging channel and let us know! We
                        will point you in the right direction from there.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <BadgedEvents />
          )}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default EventBadging;
