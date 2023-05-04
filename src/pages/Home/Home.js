import "../../assets/styles/global.scss";
import "./home.scss";
import { Footer, Header, Faq } from "../../components";
import { faqData } from "../../components/Faq/data";
import { featuredProjects } from "./data";
import {
	ApplySvgComponent,
	ReviewSvgComponent,
	GetBadgedSvgComponent,
} from "../../assets/images";

const Home = () => {
	return (
		<div>
			<Header />
			<div className="how-it-works">
				<div className="projects wrap">
					<p className="text-lg">
						Join 150+ open source projects trusting us to badge their projects.
					</p>
					<div className="logos">
						{featuredProjects.map((project, index) => (
							<div className="img-wrap" key={index}>
								<img src={project.logo} alt={`${project.name} logo`} />
							</div>
						))}
					</div>
				</div>
				<div className="content-wrap wrap">
					<div className="content">
						<div>
							<h2>How it Works</h2>
							<p className="text-lg">
								Join us in our mission to promote Diversity, Equity, and
								Inclusion in the workplace! <br />
								Recognize and reward DEI efforts with our innovative project
								badging system, and inspire
							</p>
						</div>
						<div className="cards">
							<div className="card">
								<div className="img-wrap" aria-hidden="true">
									<ApplySvgComponent
										width="28"
										height="30"
										className="apply-svg"
									/>
								</div>
								<div className="card-text">
									<h3>Apply for Badge</h3>
									<p>
										Lorem ipsum dolor sit amet consectetur. Urna nunc amet enim
										nec consequat vel. Lectus tellus feugiat Est scelerisque
										ante diam at sed condimentum <a href="apply">Learn more</a>
									</p>
								</div>
							</div>
							<div className="card">
								<div className="img-wrap" aria-hidden="true">
									<ReviewSvgComponent
										width="28"
										height="22"
										className="review-svg"
									/>
								</div>
								<div className="card-text">
									<h3>Review</h3>
									<p>
										Lorem ipsum dolor sit amet consectetur. Urna nunc amet enim
										nec consequat vel. Lectus tellus feugiat Est scelerisque
										ante diam at sed condimentum <a href="apply">Learn more</a>
									</p>
								</div>
							</div>
							<div className="card">
								<div className="img-wrap" aria-hidden="true">
									<GetBadgedSvgComponent
										width="14"
										height="28"
										className="badge-svg"
									/>
								</div>
								<div className="card-text">
									<h3>Get Badged</h3>
									<p>
										Lorem ipsum dolor sit amet consectetur. Urna nunc amet enim
										nec consequat vel. Lectus tellus feugiat Est scelerisque
										ante diam at sed condimentum <a href="apply">Learn more</a>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<section className="container">
				<div className="faq">
					<h2>Still Have Questions</h2>
					{faqData.map(({ question, answer }, id) => {
						return <Faq key={id} question={question} answer={answer} />;
					})}
				</div>
			</section>

			<Footer />
		</div>
	);
};

export default Home;
