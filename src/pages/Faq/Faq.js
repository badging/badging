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
    // check location hash and show corresponding faq
    const hashStr = hash.substring(1);
    const [about, faqId] = hashStr.split("-");

    setShowAbout(about);
    faqHandler(faqId);

    // scroll to the corresponding faq
    if (faqId === "1") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.getElementById(hashStr);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

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
            className={showAbout == "event" ? "aboutEventHeader" : ""}
          >
            Event Badging{" "}
            {showAbout == "event" && <img src={arrowRight} alt="arrow" />}{" "}
          </li>
          <li
            onClick={() => eventHandler("project")}
            className={showAbout == "project" ? "aboutEventHeader" : ""}
          >
            Project Badging{" "}
            {showAbout == "project" && <img src={arrowRight} alt="arrow" />}
          </li>
        </ul>

        <div className="desc-group">
          <div
            className={`desc-child ${
              showAbout == "event" ? "showDesc" : "hideDesc"
            }`}
          >
            {eventFaqs &&
              eventFaqs.map((fac, key) => (
                <div
                  className="mainFaq"
                  key={key}
                  onClick={() => faqHandler(fac.id)}
                  id={`event-${fac.id}`}
                >
                  <a
                    href={`#event-${fac.id}`}
                    className={`faqTitle ${fac.id == faq ? "hideHeader" : ""}`}
                  >
                    {fac.title}{" "}
                  </a>
                  {fac.id == faq && (
                    <div
                      className="faq-info"
                      style={{ backgroundColor: fac.id == faq ? "#fff" : "" }}
                    >
                      <p className="faq-info-title">{fac.title}</p>
                      <p>{fac.description}</p>
                      {faq == 2 && (
                        <ul className="fac-li">
                          <li>
                            <a href="#">
                              CHAOSS DEI Event Submission Requirements:
                            </a>{" "}
                            The application process will disply the minimum
                            requirements for an event/conference to be able to
                            receive a CHAOSS DEI Event badge.
                          </li>
                          <li>
                            <a href="#">Event Submission Guidelines:</a> The
                            application process describes guidelines and steps
                            on how your event can gain a CHAOSS DEI Event Badge.
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
              showAbout == "project" ? "showDesc" : "hideDesc"
            }`}
          >
            {projectFaqs &&
              projectFaqs.map((fac, key) => (
                <div
                  className="mainFaq"
                  key={key}
                  onClick={() => faqHandler(fac.id)}
                  id={`project-${fac.id}`}
                >
                  <p
                    className={`faqTitle ${fac.id == faq ? "hideHeader" : ""}`}
                  >
                    {fac.title}{" "}
                  </p>
                  {fac.id == faq && (
                    <div
                      className="faq-info"
                      style={{ backgroundColor: fac.id == faq ? "#fff" : "" }}
                    >
                      <p className="faq-info-title">{fac.title}</p>
                      <p>{fac.description}</p>
                      {faq == 1 && (
                        <ul className="fac-li">
                          <li>
                            Ensure your project has a public GitHub or GitLab
                            repository where your DEI.md file is located or
                          </li>
                          <li>
                            If you have a priviate GitHub or GitLab repository,
                            enusre that your DEI.md file is available on a
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
