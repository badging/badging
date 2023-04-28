<<<<<<< HEAD
import  { useState } from 'react'
import '../../assets/styles/global.scss'
import './home.scss'
import { discord, dropbox, github, loom } from "../../assets/images";
import { Footer, Header, Faq } from '../../components';
import { faqData } from '../../components/Faq/data';
const projects = [
	{
		name: "github",
		logo: github,
	},
	{
		name: "loom",
		logo: loom,
	},
	{
		name: "discord",
		logo: discord,
	},
	{
		name: "dropbox",
		logo: dropbox,
	},
];

const Home = () => {
  const [hoveredCard, setHoveredCard] = useState(0);

  // track which card in the "How it Works" section is hovered over, and remove the hover effect after 1 second
	const handleMouseEnter = (card) => {
		setHoveredCard(card);
		setTimeout(() => {
			setHoveredCard(0);
		}, 1000);
	};
  return (
    <div>
      <Header />
      <div className="how-it-works ">
				<div className="projects ">
					<p className="text-lg">
						Join 150+ open source projects trusting us to badge their projects.
					</p>
					<div className="logos">
						{projects.map((project, index) => (
							<img
								src={project.logo}
								alt={`${project.name} logo`}
								key={index}
							/>
						))}
					</div>
				</div>
				<div className="content-wrap container">
					<div className="content">
						<div className="text">
							<h2 className="heading-2">How it Works</h2>
							<p className="text-lg">
								Join us in our mission to promote Diversity, Equity, and
								Inclusion in the workplace! <br />
								Recognize and reward DEI efforts with our innovative project
								badging system, and inspire
							</p>
						</div>
						<div className="cards">
							<div
								className={`card ${hoveredCard === 1 && "card-hover"}`}
								onMouseEnter={() => handleMouseEnter(1)}
							>
								<div className="img-wrap" aria-hidden="true">
									<svg
										width="28"
										height="30"
										viewBox="0 0 28 30"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M7.33317 2.99999H3.33317V6.99999H0.666504V0.333328H7.33317V2.99999ZM27.3332 6.99999V0.333328H20.6665V2.99999H24.6665V6.99999H27.3332ZM7.33317 27H3.33317V23H0.666504V29.6667H7.33317V27ZM24.6665 23V27H20.6665V29.6667H27.3332V23H24.6665ZM20.6665 6.99999H7.33317V23H20.6665V6.99999ZM23.3332 23C23.3332 24.4667 22.1332 25.6667 20.6665 25.6667H7.33317C5.8665 25.6667 4.6665 24.4667 4.6665 23V6.99999C4.6665 5.53333 5.8665 4.33333 7.33317 4.33333H20.6665C22.1332 4.33333 23.3332 5.53333 23.3332 6.99999V23ZM17.9998 9.66666H9.99984V12.3333H17.9998V9.66666ZM17.9998 13.6667H9.99984V16.3333H17.9998V13.6667ZM17.9998 17.6667H9.99984V20.3333H17.9998V17.6667Z"
											fill="url(#paint0_linear_581_11)"
										/>
										<defs>
											<linearGradient
												id="paint0_linear_581_11"
												x1="13.9998"
												y1="0.333328"
												x2="13.9998"
												y2="29.6667"
												gradientUnits="userSpaceOnUse"
											>
												<stop stopColor="#818181" />
												<stop offset="1" stopColor="#494949" />
											</linearGradient>
										</defs>
									</svg>
								</div>
								<div className="card-text">
									<h3 className="heading-3">Apply for Badge</h3>
									<p>
										Lorem ipsum dolor sit amet consectetur. Urna nunc amet enim
										nec consequat vel. Lectus tellus feugiat Est scelerisque
										ante diam at sed condimentum <a href="apply">Learn more</a>
									</p>
								</div>
							</div>
							<div
								className={`card ${hoveredCard === 2 && "card-hover"}`}
								onMouseEnter={() => handleMouseEnter(2)}
							>
								<div className="img-wrap" aria-hidden="true">
									<svg
										width="28"
										height="22"
										viewBox="0 0 28 22"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M13.3198 16.3333C14.4932 16.3333 15.5865 15.9867 16.5065 15.4L19.7598 18.6533L21.6532 16.76L18.3998 13.52C18.9865 12.5867 19.3332 11.5067 19.3332 10.3333C19.3332 7.01333 16.6532 4.33333 13.3332 4.33333C10.0132 4.33333 7.33317 7.01333 7.33317 10.3333C7.33317 13.6533 10.0132 16.3333 13.3198 16.3333ZM13.3332 6.99999C15.1732 6.99999 16.6665 8.49333 16.6665 10.3333C16.6665 12.1733 15.1732 13.6667 13.3332 13.6667C11.4932 13.6667 9.99984 12.1733 9.99984 10.3333C9.99984 8.49333 11.4932 6.99999 13.3332 6.99999ZM24.6665 0.333328H3.33317C1.8665 0.333328 0.666504 1.53333 0.666504 2.99999V19C0.666504 20.4667 1.8665 21.6667 3.33317 21.6667H24.6665C26.1332 21.6667 27.3332 20.4667 27.3332 19V2.99999C27.3332 1.53333 26.1332 0.333328 24.6665 0.333328ZM24.6665 19H3.33317V2.99999H24.6665V19Z"
											fill="url(#paint0_linear_581_144)"
										/>
										<defs>
											<linearGradient
												id="paint0_linear_581_144"
												x1="13.9998"
												y1="0.333328"
												x2="13.9998"
												y2="21.6667"
												gradientUnits="userSpaceOnUse"
											>
												<stop stopColor="#818181" />
												<stop offset="1" stopColor="#494949" />
											</linearGradient>
										</defs>
									</svg>
								</div>
								<div className="card-text">
									<h3 className="heading-3">Review</h3>
									<p>
										Lorem ipsum dolor sit amet consectetur. Urna nunc amet enim
										nec consequat vel. Lectus tellus feugiat Est scelerisque
										ante diam at sed condimentum <a href="apply">Learn more</a>
									</p>
								</div>
							</div>
							<div
								className={`card ${hoveredCard === 3 && "card-hover"}`}
								onMouseEnter={() => handleMouseEnter(3)}
							>
								<div className="img-wrap" aria-hidden="true">
									<svg
										width="14"
										height="28"
										viewBox="0 0 14 28"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M13.6666 11.9067V0.666672H0.333252V11.9067C0.333252 12.3733 0.573252 12.8133 0.986585 13.0533L6.55992 16.4L5.23992 19.52L0.693252 19.9067L4.14658 22.8933L3.09325 27.3333L6.99992 24.9733L10.9066 27.3333L9.86658 22.8933L13.3199 19.9067L8.77325 19.52L7.45325 16.4L13.0266 13.0533C13.4266 12.8133 13.6666 12.3867 13.6666 11.9067ZM5.66658 12.76L2.99992 11.16V3.33334H5.66658V12.76ZM10.9999 11.16L8.33325 12.76V3.33334H10.9999V11.16Z"
											fill="url(#paint0_linear_581_161)"
										/>
										<defs>
											<linearGradient
												id="paint0_linear_581_161"
												x1="6.99992"
												y1="0.666672"
												x2="6.99992"
												y2="27.3333"
												gradientUnits="userSpaceOnUse"
											>
												<stop stopColor="#818181" />
												<stop offset="1" stopColor="#494949" />
											</linearGradient>
										</defs>
									</svg>
								</div>
								<div className="card-text">
									<h3 className="heading-3">Get Badged</h3>
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
			
			<section className='container'>
				<div className="faq">
					<h2>Still Have Questions</h2>
			{
                faqData.map(( {question, answer}, id) => {
                    return (
                        <Faq key={id} question={question} answer={answer} />
                    )
                })
            }
				</div>
			</section>

      <Footer />
    </div>
  )
}
=======
import React from "react";

const Home = () => {
  return <div>All in/CHAOSS DEI Project Badging under development</div>;
};
>>>>>>> main

export default Home;
