import "../../assets/styles/global.scss";
import "./select-project-repo.scss";
import { useContext, useState, useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import {
  SearchBar,
  SelectedProjects,
  Loader,
  Jumbotron,
  Footer,
} from "../../components";
import { DataContext } from "../../contexts/DataContext";
import { useQuery } from "@tanstack/react-query";
import settings from "../../settings.json";
import { Link } from "react-router-dom";

const url = settings.API_BASE_URL;

const callbackQuery = (provider, code) => ({
  queryKey: ["callback", provider, code],
  queryFn: async () => {
    if (!provider || !code) {
      throw new Error("Invalid code or provider");
    }

    const response = await fetch(`${url}/callback/${provider}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code }),
    });

    return await response.json();
  },
});

const SelectProjectRepo = () => {
  const { userData, setUserData } = useContext(DataContext);
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
        name,
        email,
        repos: reposToBadge,
        provider,
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
      });
  };
  const title = "Get Started";
  const isUserDataValid = userId && name && email && reposToBadge;
  return (
    <div>
      <Jumbotron title={title} />
      <section className="main__content">
        <form className="select__project__form">
          {isUserDataValid ? (
            <>
              {showInfo && (
                <div className="select__project__info">
                  <CloseIcon onClick={() => setShowInfo(false)} />
                  <div>
                    <p>Hello {name}!</p>
                    <p>We appreciate you choosing to badge your project.</p>
                    <p>
                      Enter your desired project in the search box below before
                      you proceed to scan. You can scan as many projects as you
                      desire.
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
              {reposToBadge.length > 0 && (
                <div className="search__results">
                  <h3>SEARCH RESULT</h3>
                  <p>
                    You can proceed to scan the selected project below or search
                    to add more projects
                  </p>
                  <SelectedProjects />
                </div>
              )}

              <button
                type="button"
                onClick={handleSubmit}
                disabled={!reposToBadge.length > 0}
              >
                Scan Projects
              </button>
            </>
          ) : (
            <>
              <div
                className="select__project__info"
                style={{ backgroundColor: "#FFDADA", border: "none" }}
              >
                <div>
                  <p>
                    Unfortunately some of your data was not captured correctly
                    yet it is necessary for processing your badge.{" "}
                  </p>
                  <br />
                  <p>
                    Please make sure that either your{" "}
                    <strong>name, email, or username</strong> is{" "}
                    <strong>public</strong>.
                  </p>
                </div>
              </div>

              <button
                type="button"
                style={{
                  borderRadius: "5px",
                  backgroundColor: "#f3f5f6",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#06f395";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#f3f5f6";
                }}
              >
                <Link to="/">Back to Home</Link>
              </button>
            </>
          )}
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
