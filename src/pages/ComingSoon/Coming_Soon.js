import "../../assets/styles/global.scss";
import "./coming-soon.scss";
import { Footer, Header, Jumbotron } from "../../components";
import { comingSoon, curlyBraces } from "../../assets/images";
import { Link } from "react-router-dom";

const ComingSoon = () => {
  return (
    <div className="coming-soon">
      <Header />
      <Jumbotron
        img={<img src={curlyBraces} alt="curly braces" />}
        title="DEI Badged Projects"
        subtitle="Coming soon!"
      />
      <main>
        <div className="soon-img">
          <img src={comingSoon} alt="green and white cones" />
        </div>
        <div className="soon-text">
          <h1>Coming Soon</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Porttitor rhoncus vel sed
            interdum quis faucibus malesuada tellus. Cum nibh urna varius
            sagittis faucibus feugiat accumsan ornare urna.
          </p>
        </div>
        <div className="back-link">
          <Link to="/">Back to Homepage</Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ComingSoon;
