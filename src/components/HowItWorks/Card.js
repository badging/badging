import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CardComponent = ({icon, title, text, link}) => {
  return (
    <div className="card">
      <div className="img-wrap" aria-hidden="true">
        {icon}
      </div>
      <div className="card-text">
        <h3>{title}</h3>
        <p>
          {text} <Link to={link}>Learn more</Link>
        </p>
      </div>
    </div>
  );
};

CardComponent.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default CardComponent;