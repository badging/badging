import "../../assets/styles/global.scss";
import "./selectProjectRepo.scss";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { SearchBar, SelectedProjects, Layout } from "../../components";
import { DataContext } from "../../contexts/DataContext";
// import useLoadingError from "../../hooks/useLoadingError";

const SelectProjectRepo = () => {
	const { userData, setUserData } = useContext(DataContext);
	// const { error, setError } = useLoadingError();
	const { name, email, reposToBadge } = userData;
	const [showInfo, setShowInfo] = useState(true);
	const navigate = useNavigate();

	const handleSubmit = () => {
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
				navigate("/project-badging-successful", { state: { name } }); // navigate to success page
			})
			// eslint-disable-next-line no-unused-vars
			.catch((error) => {
				setUserData({ ...userData, reposToBadge: [] });
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
						Scan Project
					</button>
				</form>
			</section>
		</Layout>
	);
};

export default SelectProjectRepo;
