import { NavLink } from "react-router-dom";
import { arrowRight } from "../../assets/images";
import { useState } from "react";

const Sidebar = () => {
  const [isActive, setIsActive] = useState(1);

  return (
    <ul>
      <li>
        <div className="main__link linkGap">
          <NavLink
            exact="true"
            to="/project-badging"
            id="what-is-dei-badging"
            end
            onClick={() => setIsActive(1)}
          >
            What is CHAOSS DEI Project Badging?
          </NavLink>
          <img src={arrowRight} alt="arrow" />
        </div>
        {isActive === 1 && (
          <div className="sub__links">
            <NavLink exact="true" to="#">
              Objective
            </NavLink>
          </div>
        )}
      </li>

      <li>
        <div className="main__link">
          <NavLink
            exact="true"
            to="/project-badging/application-process"
            onClick={() => setIsActive(2)}
          >
            How it Works
          </NavLink>
          <img src={arrowRight} alt="arrow" />
        </div>
        {isActive === 2 && (
          <div className="sub__links">
            <NavLink exact="true" to="/project-badging/application-process">
              Self-Assessment & Documen...
            </NavLink>
            <NavLink exact="true" to="/project-badging/application-process">
              Badging Evaluation
            </NavLink>
            <NavLink exact="true" to="/project-badging/application-process">
              Recognition and Badging
            </NavLink>
            <NavLink exact="true" to="/project-badging/application-process">
              Continued Engagement
            </NavLink>
          </div>
        )}
      </li>
      <li>
        <div className="main__link">
          <NavLink exact="true" to="/project-badging/dei-file">
            DEI.md File
          </NavLink>
          <img src={arrowRight} alt="arrow" />
        </div>
      </li>
      <li>
        <div className="main__link">
          <NavLink
            exact="true"
            to="/project-badging/dei-badge"
            onClick={() => setIsActive(4)}
          >
            DEI Badges
          </NavLink>
          <img src={arrowRight} alt="arrow" />
        </div>
        {isActive === 4 && (
          <div className="sub__links">
            <NavLink exact="true" to="/project-badging/dei-badge">
              Bronze Badge
            </NavLink>
            <NavLink exact="true" to="/project-badging/dei-badge">
              Criteria
            </NavLink>
          </div>
        )}
      </li>
    </ul>
  );
};

export default Sidebar;
