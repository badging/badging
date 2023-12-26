import React from "react";

const DeiFile = () => {
  return (
    <div className="dei__file ">
      <h2 id="dei-file">DEI.md File</h2>
      <p>
        The DEI.md file is an essential component of CHAOSS DEI Project Badging.
        It serves as a benchmark for open source projects to openly acknowledge
        and showcase their dedication to diversity, equity, and inclusion (DEI).
      </p>

      <p>
        The DEI.md file can be used to explicitly express and self-reflect on
        their project&#39;s approach to DEI. Community members are encouraged to
        include relevant content that reflects their project&#39;s specific
        approaches and initiatives regarding diversity, equity, and inclusion
        within the DEI.md file. This may include outlining strategies, policies,
        and practices to foster a welcoming environment for all contributors.
      </p>

      <ul>
        <li>
          If using a development platform, place the DEI.md file in an
          organizationally available repository, similar to your{" "}
          <strong>CODE_OF_CONDUCT.md file</strong>
        </li>
        <li>
          If an organizational-level folder is not available, place the DEI.md
          file in a community repository
        </li>
        <li>
          Use the following{" "}
          <a href="https://github.com/badging/badging/blob/main/Template.DEI.md">
            DEI.md template
          </a>{" "}
          and{" "}
          <a href="https://github.com/badging/badging/blob/main/Guide.DEI.md">
            DEI.md guide
          </a>{" "}
          to develop your project DEI.md file.
        </li>
      </ul>
    </div>
  );
};

export default DeiFile;
