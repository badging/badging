import React from "react";

const ApplicationProcess = () => {
  return (
    <div className="application_process">
      <h2 id="application-process">How It Works</h2>
      <div>
        <h3>Self-Assessment and Documentation:</h3>
        <p>
          Before applying for a CHAOSS Project DEI Badge, maintainers or project
          admins are encouraged to conduct a self-assessment of their
          project&#39;s DEI efforts based on the following{" "}
          <strong>CHAOSS DEI metrics:</strong> Project Access, Inclusive
          Leadership, Communication Transparency, and Newcomer Experience. After
          the reflective process, maintainers can document how the project
          attends to and prioritizes DEI around these areas in a markdown file
          called the{" "}
          <a href="https://github.com/badging/badging/blob/main/Template.DEI.md">
            DEI.md file
          </a>
          . This DEI.md file should exist within the project&#39;s repository
          for easy feedback from the community. A guide for putting together
          your DEI.md file is avaialble through the{" "}
          <a href="https://github.com/badging/badging/blob/main/Guide.DEI.md">
            DEI.md Guide
          </a>
        </p>
      </div>
      <div>
        <h3>Badging Application:</h3>
        <p>
          Once the DEI.md file is published and publicly available, project
          owners can proceed to{" "}
          <a href="https://badging.chaoss.community/badge">apply here</a>. The
          applicant must be a project owner and the repository that holds the
          DEI.md file must be specified.
        </p>
      </div>
      <div>
        <h3>Badging Evaluation:</h3>
        <p>
          The review follows an automated process in which a CHAOSS bot scans
          the project repository for the presence of a DEI.md file. The bot will
          review the DEI.md file for relevant information provided by the
          maintainer and its alignment with the CHAOSS DEI metrics stated in the
          <a href="https://github.com/badging/badging/blob/main/Template.DEI.md">
            DEI.md template
          </a>{" "}
          to determine eligibility for the badge. Upon successful review of the
          DEI.md file, a project badge will be issued. The four CHAOSS metrics
          used in the DEI.md file include:
        </p>
        <ul className="bullet-list">
          <li>Project Access</li>
          <li>Inclusive Leadership </li>
          <li>Communication Transparency</li>
          <li>Newcomer Experience</li>
        </ul>
      </div>
      <div>
        <h3>Recognition and Badging:</h3>
        <p>
          Projects that meet the established criteria will receive the CHAOSS
          DEI Project Badge, which can be prominently displayed on the
          project&#39;s website, documentation, or other relevant platforms. The
          badge signifies the project&#39;s commitment to DEI and highlights its
          attention to DEI best practices.
        </p>
      </div>
      <div>
        <h3>Continued Engagement:</h3>
        <p>
          Once the badging process is completed, you can re-apply for a project
          badge -- we recommend after about a year. We will also be developing
          CHAOSS Project Badges for Silver, Gold, and Platnium levels in the
          future that include new CHAOSS metrics.
        </p>
      </div>
    </div>
  );
};

export default ApplicationProcess;
