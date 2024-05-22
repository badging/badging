import { useContext } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { DataContext } from "../../contexts/DataContext";

const SelectedProjects = () => {
  const { userData, setUserData } = useContext(DataContext);
  const filteredReposToBadge = [...new Set(userData.reposToBadge)];

  const handleClearInput = (event, repoData) => {
    event.stopPropagation();
    const repos = userData.reposToBadge.filter(
      (repo) => repo.id !== repoData.id
    );

    setUserData({
      ...userData,
      reposToBadge: repos,
    });
  };

  return (
    <ul>
      {/* {loading && <li className="loading">Loading...</li>}
			{error && <li className="error">{error}</li>}
			{!loading && !error && results.length === 0 && (
				<li className="info">Repository not found</li>
			)} */}
      {
        // !loading &&
        // 	!error &&

        filteredReposToBadge.map((repoData, index) => (
          <li key={index} className="result">
            {repoData.fullName}
            <button
              type="button"
              className="clear btn"
              onClick={(event) => handleClearInput(event, repoData)}
            >
              <CloseIcon />
            </button>
          </li>
        ))
      }
    </ul>
  );
};

export default SelectedProjects;
