import "./about.scss";
import "../../assets/styles/global.scss";
import {
	Footer,
	Header,
	Jumbotron,
	Sidebar,
	AboutDeiMobile,
} from "../../components";
import { useDesktop } from "../../contexts/DesktopContext";
import { Outlet } from "react-router-dom";

const About = () => {
	const { isDesktop } = useDesktop();

	return (
		<div className="about-dei">
			<div className="header">
				<Header />
				<Jumbotron
					title="About DEI Badging"
					subheading="What is All-In CHAOSS DEI Badging?"
					description="The All In CHAOSS DEI Badging is an Initiative developed in partnership between CHAOSS and All In to recognize communities and projects that exemplify best practices for Diversity, Equity, and Inclusion (DEI) work within their respective communities. It involved using the CHAOSS DEI metrics as a benchmark to reflect on and access DEI efforts within open-source projects."
				>
					<p>
						The insights gained from the reflection process and report can be
						used to drive positive change and make measurable progress in
						creating a more diverse, equitable, and inclusive environment.
					</p>
				</Jumbotron>
			</div>
			<main>
				{isDesktop && (
					<>
						<aside className="page__nav">
							<Sidebar />
						</aside>
						<section className="page__content">
							<Outlet />
						</section>
					</>
				)}
				{!isDesktop && (
					<section className="page__content">
						<AboutDeiMobile />
					</section>
				)}
			</main>
			<Footer />
		</div>
	);
};

export default About;
