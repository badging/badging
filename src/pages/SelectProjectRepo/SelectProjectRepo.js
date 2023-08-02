import "../../assets/styles/global.scss";
import "./selectProjectRepo.scss";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Header, SearchBar } from "../../components";
import { DataContext } from "../../contexts/DataContext";
import useLoadingError from "../../hooks/useLoadingError";

const SelectProjectRepo = () => {
	const { userData, setUserData } = useContext(DataContext);
	const { error, setError } = useLoadingError();
	const { name, email, repoToBadge } = userData;
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
				navigate("/"); // navigate to success page
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
						<h2>Search For Project Repository</h2>
						<SearchBar />
						{error && !repoToBadge && <p className="error">{error}</p>}
						<button
							type="button"
							onClick={handleSubmit}
							onBlur={() => setError(null)}
						>
							Submit
						</button>
					</form>
				</section>
			</main>
		</div>
	);
};

export default SelectProjectRepo;
