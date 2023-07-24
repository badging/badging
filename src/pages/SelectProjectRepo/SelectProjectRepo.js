import "../../assets/styles/global.scss";
import "./selectProjectRepo.scss";
import { useContext } from "react";
import { Header, SearchBar } from "../../components";
import { DataContext } from "../../contexts/DataContext";
import { useNavigate } from "react-router-dom";

const SelectProjectRepo = () => {
	const { userData } = useContext(DataContext);
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		const { name, email, projectsToBadge } = userData;

		if (!projectsToBadge || projectsToBadge.length === 0) {
			alert("Please select a project to badge");
			return;
		}

		// api call to get badged
		const baseurl = "https://badging.allinopensource.org/api";
		fetch(`${baseurl}/repos-to-badge`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ name, email, repos: projectsToBadge }),
		})
			.then((response) => response.json())
			// eslint-disable-next-line no-unused-vars
			.then((data) => {
				// setBadgedRepos([...badgedRepos, ...data.results]);

				navigate("/"); // navigate to success page
			})
			.catch((error) => {
				console.log("an error occurred while submitting repo for badging");
				console.log(error);
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
						<button type="button" onClick={handleSubmit}>
							Submit
						</button>
					</form>
				</section>
			</main>
		</div>
	);
};

export default SelectProjectRepo;
