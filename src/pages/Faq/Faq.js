import React, { useEffect, useState } from "react";
import { Footer, Jumbotron } from "../../components";
import { arrowRight } from "../../assets/images";
import "./Faq.scss";
import { eventFaqs, projectFaqs } from "./data";
import { useLocation } from "react-router-dom";

const Faq = () => {
  const [showAbout, setShowAbout] = useState("event");
  const [faq, setFaq] = useState("");
  const location = useLocation();
  const { hash } = location;

  useEffect(() => {
    // Check location hash and show corresponding FAQ
    const hashStr = hash.substring(1);
    const [about, faqId] = hashStr.split("-");

    setShowAbout(about);
    faqHandler(faqId);

    // Scroll to the corresponding FAQ
    if (faqId === "1") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.getElementById(hashStr);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

  const eventHandler = (about) => {
    setShowAbout(about);
  };

  const faqHandler = (getFaq) => {
    setFaq(getFaq);
  };
  const title = "Frequently Asked Questions";

  return (
    <main>
      <Jumbotron title={title} />
      <section className="faq container">
        <ul className="main-list">
          <li
            onClick={() => eventHandler("event")}
            className={showAbout === "event" ? "aboutEventHeader" : ""}
            tabIndex="0"
            role="button"
            onKeyDown={(e) => e.key === "Enter" && eventHandler("event")}
          >
            Event Badging{" "}
            {showAbout === "event" && <img src={arrowRight} alt="arrow" />}
          </li>
          <li
            onClick={() => eventHandler("project")}
            className={showAbout === "project" ? "aboutEventHeader" : ""}
            tabIndex="0"
            role="button"
            onKeyDown={(e) => e.key === "Enter" && eventHandler("project")}
          >
            Project Badging{" "}
            {showAbout === "project" && <img src={arrowRight} alt="arrow" />}
          </li>
        </ul>

        <div className="desc-group">
          <div
            className={`desc-child ${
              showAbout === "event" ? "showDesc" : "hideDesc"
            }`}
          >
            {eventFaqs &&
              eventFaqs.map((fac, key) => (
                <div
                  className="mainFaq"
                  key={key}
                  onClick={() => faqHandler(fac.id)}
                  id={`event-${fac.id}`}
                  tabIndex="0"
                  role="button"
                  onKeyDown={(e) => e.key === "Enter" && faqHandler(fac.id)}
                >
                  <a
                    href={`#event-${fac.id}`}
                    className={`faqTitle ${fac.id === faq ? "hideHeader" : ""}`}
                  >
                    {fac.title}
                  </a>
                  {fac.id === faq && (
                    <div
                      className="faq-info"
                      style={{ backgroundColor: fac.id === faq ? "#fff" : "" }}
                    >
                      <p className="faq-info-title">{fac.title}</p>
                      <p>{fac.description}</p>
                      {faq === "2" && (
                        <ul className="fac-li">
                          <li>
                            <button className="link-button">
                              CHAOSS DEI Event Submission Requirements:
                            </button>{" "}
                            The application process will display the minimum
                            requirements for an event/conference to be able to
                            receive a CHAOSS DEI Event badge.
                          </li>
                          <li>
                            <button className="link-button">
                              Event Submission Guidelines:
                            </button>{" "}
                            The application process describes guidelines and
                            steps on how your event can gain a CHAOSS DEI Event
                            Badge.
                          </li>
                        </ul>
                      )}
                    </div>
                  )}
                </div>
              ))}
          </div>
          <div
            className={`desc-child ${
              showAbout === "project" ? "showDesc" : "hideDesc"
            }`}
          >
            {projectFaqs &&
              projectFaqs.map((fac, key) => (
                <div
                  className="mainFaq"
                  key={key}
                  onClick={() => faqHandler(fac.id)}
                  id={`project-${fac.id}`}
                  tabIndex="0"
                  role="button"
                  onKeyDown={(e) => e.key === "Enter" && faqHandler(fac.id)}
                >
                  <p
                    className={`faqTitle ${fac.id === faq ? "hideHeader" : ""}`}
                  >
                    {fac.title}
                  </p>
                  {fac.id === faq && (
                    <div
                      className="faq-info"
                      style={{ backgroundColor: fac.id === faq ? "#fff" : "" }}
                    >
                      <p className="faq-info-title">{fac.title}</p>
                      <p>{fac.description}</p>
                      {faq === "1" && (
                        <ul className="fac-li">
                          <li>
                            Ensure your project has a public GitHub or GitLab
                            repository where your DEI.md file is located, or
                          </li>
                          <li>
                            If you have a private GitHub or GitLab repository,
                            ensure that your DEI.md file is available on a
                            website or other public location.
                          </li>
                        </ul>
                      )}
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Faq;
