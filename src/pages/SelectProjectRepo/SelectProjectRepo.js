import "../../assets/styles/global.scss";
import "./selectProjectRepo.scss";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { SearchBar, SelectedProjects, Layout, Loader } from "../../components";
import { DataContext } from "../../contexts/DataContext";
// import useLoadingError from "../../hooks/useLoadingError";

const SelectProjectRepo = () => {
  const { userData, setUserData } = useContext(DataContext);
  // const { error, setError } = useLoadingError();
  const { name, email, reposToBadge } = userData;
  const [showInfo, setShowInfo] = useState(true);
  const [openLoaderDark, setOpenLoaderDark] = useState(false);
  const [openLoaderLight, setOpenLoaderLight] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const baseurl = "https://badging.allinopensource.org/api";
    const urlParams = new URLSearchParams(document.location.search);
    const code = urlParams.get("code");

    if (!code) {
      //  ?? get data from local storage
      setShowInfo(false);
      return;
    }

    setOpenLoaderDark(true);

    fetch(`${baseurl}/callback`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code }),
    })
      .then((response) => response.json())
      .then((data) => {
        setUserData({
          ...userData,
          username: data.username,
          name: data.name,
          email: data.email,
          repos: data.repos,
        });

        setOpenLoaderDark(false);
      })
      .catch((error) => {
        setOpenLoaderDark(false);
        // setError("An error occurred while fetching your data. Please try again later.");
        console.log("an error occurred: ", error);
      });
  }, []);

  const handleSubmit = () => {
    // open loader
    setOpenLoaderLight(true);

    // api call to get badged
    const baseurl = "https://badging.allinopensource.org/api";
    fetch(`${baseurl}/repos-to-badge`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, repos: reposToBadge }),
    })
      .then((response) => response.json())
      // eslint-disable-next-line no-unused-vars
      .then((data) => {
        setUserData({ ...userData, reposToBadge: [] });
        navigate("/project-badging-successful", { state: { name, email } }); // navigate to success page
      })
      // eslint-disable-next-line no-unused-vars
      .catch((error) => {
        setUserData({ ...userData, reposToBadge: [] });
        setOpenLoaderLight(false);

        // setError(
        // 	"an error occurred while submitting repo for badging. Please try again"
        // );
        // console.log(
        // 	"an error occurred while submitting repo for badging: ",
        // 	error
        // );
      });
  };

  return (
    <Layout>
      <section className="main__content">
        <form className="select__project__form">
          {showInfo && (
            <div className="select__project__info">
              <CloseIcon onClick={() => setShowInfo(false)} />
              <div>
                <p>Hello {name}!</p>
                <p>We appreciate you choosing to badge your project.</p>
                <p>
                  Enter your desired project in the search box below before you
                  proceed to scan. You can scan as many projects as you desire.
                </p>
              </div>
            </div>
          )}
          <h2>Search For Project Repository</h2>
          <p className="text">
            <strong>Note: </strong>The selected repository must have the
            presence of a DEI.md file.
          </p>
          <SearchBar setShowInfo={setShowInfo} />
          {/* {error && !reposToBadge && <p className="error">{error}</p>} */}
          {reposToBadge.length > 0 && (
            <div className="search__results">
              <h3>SEARCH RESULT</h3>
              <p>
                You can proceed to scan the selected project below or search to
                add more projects
              </p>
              <SelectedProjects />
            </div>
          )}
          <button
            type="button"
            onClick={handleSubmit}
            // onBlur={() => setError(null)}
            disabled={!reposToBadge.length > 0}
          >
            Scan Projects
          </button>
        </form>
      </section>
      <Loader open={openLoaderDark}>
        <p>Authenticating User</p>
      </Loader>
      <Loader open={openLoaderLight} bgColor={"#fff"}>
        <p style={{ color: "#030303" }}>...scanning Repository</p>
      </Loader>
    </Layout>
  );
};

export default SelectProjectRepo;
