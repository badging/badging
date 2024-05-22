import React from "react";
import { Header } from "../../components";
import { Link, useLocation } from "react-router-dom";
import "./project-badging-success.scss";

const ProjectBadgingSuccess = () => {
  const location = useLocation();
  const { state } = location;
  return (
    <div>
      <Header />
      <main>
        <div className="successContainer">
          <div className="infoContainer">
            <div className="msg-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="145"
                height="130"
                viewBox="0 0 145 130"
                fill="none"
              >
                <path
                  d="M2.19531 50.9229L68.2883 1.88483C69.6045 0.909654 71.2006 0.3861 72.8386 0.392266C74.4766 0.398431 76.0687 0.933985 77.3775 1.91904L142.473 50.9229H2.19531Z"
                  fill="black"
                />
                <path
                  d="M140.061 50.2843H4.6073C2.06276 50.2843 0 52.3471 0 54.8916V140.6C0 143.144 2.06276 145.207 4.6073 145.207H140.061C142.605 145.207 144.668 143.144 144.668 140.6V54.8916C144.668 52.3471 142.605 50.2843 140.061 50.2843Z"
                  fill="black"
                />
                <path
                  d="M138.139 56.5623L122.96 68.3314L122.761 68.4853L110.416 78.0307L101.509 84.9245L82.96 99.2824L79.3904 102.048L77.4061 100.839C75.8849 99.9088 74.1351 99.4194 72.352 99.4255C70.5689 99.4315 68.8226 99.9327 67.3077 100.873L65.3348 102.099L62.21 99.6929L43.0224 84.9245L34.0644 78.0307L21.6681 68.4853L19.3872 66.7405L6.16406 56.5623H138.139Z"
                  fill="white"
                />
                <path
                  d="M139.57 138.821L79.379 102.048L77.3947 100.839C75.8735 99.9089 74.1237 99.4195 72.3406 99.4256C70.5575 99.4316 68.8112 99.9329 67.2963 100.873L65.3234 102.099L6.16406 138.821L62.1986 99.6931L67.1252 96.2718C68.7846 95.0361 70.7983 94.3687 72.8672 94.3687C74.9362 94.3687 76.9499 95.0361 78.6093 96.2718L82.9485 99.2996L139.57 138.821Z"
                  fill="#06F395"
                />
                <path
                  d="M12.6281 13.5913H131.665C133.38 13.5913 135.025 14.2726 136.237 15.4852C137.45 16.6979 138.131 18.3426 138.131 20.0575V56.5509H6.15625V20.0575C6.15625 19.2079 6.32369 18.3666 6.649 17.5817C6.97431 16.7968 7.45112 16.0837 8.05216 15.4832C8.65321 14.8827 9.36671 14.4065 10.1519 14.0819C10.9371 13.7573 11.7785 13.5906 12.6281 13.5913Z"
                  fill="white"
                />
                <path
                  d="M122.929 28.7247H19.3789V35.6186H122.929V28.7247Z"
                  fill="#E9E9E9"
                />
                <path
                  d="M122.929 45.1581H19.3789V52.0519H122.929V45.1581Z"
                  fill="#E9E9E9"
                />
                <path
                  d="M122.937 61.5972V68.3313L122.737 68.4853H21.6562L19.3867 66.7405V61.5972H122.937Z"
                  fill="#E9E9E9"
                />
                <path
                  d="M110.406 78.0308L101.499 84.9246H43.0127L34.0547 78.0308H110.406Z"
                  fill="#E9E9E9"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="395"
                height="2"
                viewBox="0 0 395 2"
                fill="none"
              >
                <path d="M0.75 1H394.25" stroke="black" />
              </svg>
            </div>
            <p className="title-header">Scan Successful!</p>
            <div className="report">
              <p> Hello {state?.name}! You will receive an email shortly.</p>
              <p>Kindly check your email {state?.email}.</p>
            </div>
          </div>
          <div className="badge-more">
            <div className="item">
              <Link to={`/select-project/${state?.provider}`}>
                Badge more repos
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectBadgingSuccess;
