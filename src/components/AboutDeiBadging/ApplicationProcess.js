import React from "react";

const ApplicationProcess = () => {
	return (
		<div>
			<h2 id="application-process">Application Process</h2>
			<p>
				The All In CHAOSS DEI Badging Initiative follows a straightforward
				process:
			</p>
			<div>
				<h3>Self-Assessment and Documentation:</h3>
				<p>
					Before applying for a DEI badge, maintainers are encouraged to conduct
					a self-assessment of their project&#39;s DEI efforts based on the{" "}
					<strong>CHAOSS DEI metrics</strong> on Project Access, Newcomer
					Experience, etc. After the reflective process, maintainers can
					document how the project attends to and prioritizes DEI around these
					areas in a markdown file called the DEI.md file. This DEI.md file
					should exist within the project&#39;s repository for easy feedback
					from the community.
				</p>
			</div>
			<div>
				<h3>Project Application:</h3>
				<p>
					Once the DEI.md file is published and publicly available, project
					maintainers interested in the All in CHAOSS DEI badge can proceed to
					apply here. The applicant must be a maintainer of the project, and the
					repository that holds the DEI.md file must be specified.
				</p>
			</div>
			<div>
				<h3>Badging Evaluation:</h3>
				<p>
					The review follows an automated process in which a bot scans the
					project repository for the presence of a DEI.md file. The bot will
					review the DEI.md file for relevant information provided by the
					maintainer and its alignment with the CHAOSS DEI metrics to determine
					eligibility for the DEI badge.
				</p>
			</div>
			<div>
				<h3>Recognition and Badging:</h3>
				<p>
					Projects that meet the established criteria will be awarded the All In
					CHAOSS DEI badge, which they can prominently display on their
					project&#39;s website, documentation, or other relevant platforms. The
					badge signifies the project&#39;s commitment to DEI and highlights its
					adherence to best practices.
				</p>
			</div>
			<div>
				<h3>Continued Engagement:</h3>
				<p>
					Once the badging process is completed, we provide inclusive,
					comprehensive reports and insight for maintainers to enable them to
					reflect on their DEI efforts. This report will also enable maintainers
					to identify areas of improvement and do better before applying for
					other badges. Maintainers who receive the DEI badge are encouraged to
					continue their DEI, share experiences, and learn from others in the
					community.
				</p>
			</div>
		</div>
	);
};

export default ApplicationProcess;
