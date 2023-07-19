import React from "react";

const DeiFile = () => {
	return (
		<div className="dei__file ">
			<h2 id="dei-file">DEI.md File</h2>
			<p>
				The DEI.md file is an essential component of the All In CHAOSS DEI
				badging initiative. It serves as a benchmark for open-source projects to
				openly acknowledge and showcase their dedication to diversity, equity,
				and inclusion (DEI).
			</p>

			<p>
				The DEI.md file can be used by maintainers to explicitly express and
				self-reflect on their project&#39;s approach to DEI. It also highlights
				crucial points within our projects and communities that should be
				prioritized.
			</p>

			<p>
				Maintainers are encouraged to include relevant content that reflects
				their project&#39;s specific approaches and initiatives regarding
				diversity, equity, and inclusion within DEI.md file. This may include
				outlining strategies, policies, and practices to foster a welcoming
				environment for all contributors.
			</p>
			<ul>
				<li>
					If using GitHub, place the DEI.md file in your organizational .github
					repository, similar to your CODE_OF_CONDUCT.md file.
				</li>
				<li>
					If using GitHub and a .github folder is unavailable or used, place the
					DEI.md file in a community repository.
				</li>
				<li>
					If you have a project website, provide a link to your DEI.md file from
					the main project navigation.
				</li>
				<li>
					Use the following <strong>DEI.md template</strong> to develop your
					project DEI.md file.
				</li>
			</ul>
		</div>
	);
};

export default DeiFile;
