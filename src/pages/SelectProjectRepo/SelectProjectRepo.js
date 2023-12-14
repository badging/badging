import "../../assets/styles/global.scss";
import "./selectProjectRepo.scss";
import { useContext, useState, useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { SearchBar, SelectedProjects, Layout, Loader, Jumbotron, Footer } from "../../components";
import { DataContext } from "../../contexts/DataContext";
// import useLoadingError from "../../hooks/useLoadingError";
import { useQuery } from "@tanstack/react-query";

const callbackQuery = (provider, code) => ({
  queryKey: ["callback", provider, code],
  queryFn: async () => {
    if (!provider || !code) {
      throw new Error("Invalid code or provider");
    }

    const url = process.env.API_BASE_URL || "https://badging.chaoss.community/api"

    const response = await fetch(
      `${url}/callback/${provider}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      }
    );

    return await response.json();
  },
});

const SelectProjectRepo = () => {
  const { userData, setUserData } = useContext(DataContext);
  // const { error, setError } = useLoadingError();
  const { userId, name, email, reposToBadge } = userData;
  const [showInfo, setShowInfo] = useState(true);
  const [openLoaderLight, setOpenLoaderLight] = useState(false);
  const { provider } = useParams();
  const [searchParams] = useSearchParams();

  const navigate = useNavigate();

  const { data: fetchedUserData, isPending: fetchingUserData } = useQuery(
    callbackQuery(provider, searchParams.get("code"))
  );

  useEffect(() => {
    if (fetchedUserData) {
      setUserData({
        ...userData,
        userId: fetchedUserData.userId,
        username: fetchedUserData.username,
        name: fetchedUserData.name,
        email: fetchedUserData.email,
        repos: fetchedUserData.repos,
        provider: fetchedUserData.provider,
      });
    }
  }, [fetchedUserData]);

  const handleSubmit = () => {
    // open loader
    setOpenLoaderLight(true);

    // api call to get badged
    fetch(`${url}/repos-to-badge`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        provider,
        repos: reposToBadge.map((repoData) => repoData.id),
      }),
    })
      .then((response) => response.json())
      // eslint-disable-next-line no-unused-vars
      .then((data) => {
        setUserData({ ...userData, reposToBadge: [] });
        navigate("/project-badging-successful", {
          state: { name, email, provider },
        }); // navigate to success page
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
const title = "Get Started"
  return (
    <div>
      <Jumbotron title={title} />
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
          <div className="select-header">
            <h2>Search For Project Repository</h2>
          <p className="text">
            <strong>Note: </strong>The selected repository must have the
            presence of a DEI.md file.
          </p>
          </div>
          
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
      <Loader open={fetchingUserData}>
        <p>Authenticating User</p>
      </Loader>
      <Loader open={openLoaderLight} bgColor={"#fff"}>
        <p style={{ color: "#030303" }}>...scanning Repository</p>
      </Loader>

      <Footer />
    </div>
  );
};

export default SelectProjectRepo;
