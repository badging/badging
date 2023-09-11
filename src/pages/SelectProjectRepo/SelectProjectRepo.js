import "../../assets/styles/global.scss";
import "./selectProjectRepo.scss";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { Header, SearchBar } from "../../components";
import { DataContext } from "../../contexts/DataContext";
import useLoadingError from "../../hooks/useLoadingError";

const SelectProjectRepo = () => {
	const { userData, setUserData } = useContext(DataContext);
	const { error, setError } = useLoadingError();
	const { name, email, repoToBadge } = userData;
	const [disabled, setDisabled] = useState(true);
	const [showInfo, setShowInfo] = useState(true);
	const navigate = useNavigate();

	const handleSubmit = () => {
		if (!repoToBadge) {
			setError("Please select a repository for badging");
			return;
		}

		// api call to get badged
		const baseurl = "https://badging.allinopensource.org/api";
		fetch(`${baseurl}/repos-to-badge`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ name, email, repos: [repoToBadge] }),
		})
			.then((response) => response.json())
			// eslint-disable-next-line no-unused-vars
			.then((data) => {
				setUserData({ ...userData, repoToBadge: "" });
				navigate("/project-badging-successful", { state: { name } }); // navigate to success page
			})
			.catch((error) => {
				setUserData({ ...userData, repoToBadge: "" });
				setError(
					"an error occurred while submitting repo for badging. Please try again"
				);
				console.log(
					"an error occurred while submitting repo for badging: ",
					error
				);
			});
	};

	return (
		<div className="select__project">
			<Header />
			<main>
				<aside>
					<p className="heading__2">You can Badge As Many Project You Want.</p>
				</aside>

				<section className="main__content">
					<form className="select__project__form">
						{showInfo && (
							<div className="select__project__info">
								<CloseIcon onClick={() => setShowInfo(false)} />
								<div>
									<p>Hello John!</p>
									<p>We appreciate you choosing to badge your project.</p>
									<p>
										Enter your desired project in the search box below before
										you proceed to scan. You can scan as many projects as you
										desire.
									</p>
								</div>
							</div>
						)}
						<h2>Search For Project Repository</h2>
						<p className="text">
							<strong>Note: </strong>The selected repository must have the
							presence of a DEI.md file.
						</p>
						<SearchBar />
						{/* {error && !repoToBadge && <p className="error">{error}</p>} */}
						<button
							type="button"
							onClick={handleSubmit}
							onBlur={() => setError(null)}
							disabled={disabled}
						>
							Scan Project
						</button>
					</form>
				</section>
			</main>
		</div>
	);
};

export default SelectProjectRepo;
