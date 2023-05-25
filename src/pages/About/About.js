import "../../assets/styles/global.scss";
import "./about.scss";
import { Footer, Header, Jumbotron } from "../../components";
import { goldBadge, silverBadge, passingBadge } from "../../assets/images";

const About = () => {
	return (
		<div className="about-dei">
			<Header />
			<Jumbotron
				title="About DEI Project Badging"
				description="Lorem ipsum dolor sit amet consectetur. Sed risus ultrices sit nibh sed. Interdum urna molestie fames porttitor elementum a diam laoreet. Sed tempor habitant phasellus velit sagittis mauris lorem pretium. Arcu neque id duis eu pellentesque in amet et. Ipsum ultricies a etiam est. Viverra eleifend tortor iaculis fringilla sed."
			/>
			<main>
				<section className="top">
					<div className="content">
						<div>
							<h2>What is DEI Project Badging?</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur. Sit sed aliquam
								ullamcorper feugiat ut phasellus nunc. Morbi feugiat tempus
								molestie molestie massa. Odio non curabitur in quam ullamcorper
								tellus quam augue cum. Neque ut
							</p>
						</div>
						<div>
							<h2>DEI Project Badging Objective</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur. Sit sed aliquam
								ullamcorper feugiat ut phasellus nunc. Morbi feugiat tempus
								molestie molestie massa. Odio non curabitur in quam ullamcorper
								tellus quam augue cum. Neque ut
							</p>
						</div>
					</div>
				</section>
				<section className="btm">
					<div className="content">
						<div>
							<h2>Application Process</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur. Sit sed aliquam
								ullamcorper feugiat ut phasellus nunc. Morbi feugiat tempus
								molestie molestie massa. Odio non curabitur in quam ullamcorper
								tellus quam augue cum. Neque ut
							</p>
						</div>
						<div className="dei-file ">
							<h2>DEI.md File</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur. Sit sed aliquam
								ullamcorper feugiat ut phasellus nunc. Morbi feugiat tempus
								molestie molestie massa. Odio non curabitur in quam ullamcorper
								tellus quam augue cum. Neque ut
							</p>
							<img src="https://via.placeholder.com/150" alt="DEI.md file" />
						</div>
						<div className="dei-badge ">
							<h2>DEI Badge</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur. Sit sed aliquam
								ullamcorper feugiat ut phasellus nunc. Morbi feugiat tempus
								molestie molestie massa. Odio non curabitur in quam ullamcorper
								tellus quam augue cum. Neque ut
							</p>
							<div className="badges">
								<img src={goldBadge} alt="Gold badge" />
								<img src={passingBadge} alt="Passing badge" />
								<img src={silverBadge} alt="Silver badge" />
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
};

export default About;
